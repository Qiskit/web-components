/**
 * Copyright (c) IBM, Corp. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LitElement, html } from 'lit';
import { property, customElement, query, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { map } from 'lit/directives/map.js';
import { when } from 'lit/directives/when.js';

import chevronDown from '../icons/chevron-down.js';
import styles from './index.scss';

interface HighlightTextState {
  text: string;
  isHighlighted: boolean;
}

interface NavLink {
  label: string;
  url: string;
}

interface QiskitMegaMenuDropdownGroup {
  title: NavLink;
  content: NavLink[];
}

interface QiskitMegaMenuDropdownBlock {
  title: string;
  content: QiskitMegaMenuDropdownGroup[];
}

export type QiskitMegaMenuDropdownContent = QiskitMegaMenuDropdownBlock[];

@customElement('qiskit-mega-menu-dropdown')
export class QiskitMegaMenuDropdown extends LitElement {
  static styles = [styles];

  @query('.filter__input')
  protected _filterInput!: HTMLInputElement;

  @query('.app-mega-dropdown')
  protected _mainElement!: HTMLElement;

  @property()
  placeholder = 'Browse all content';

  @property({ type: Array })
  content: QiskitMegaMenuDropdownContent = [];

  protected _performedSearchEventTimeout: NodeJS.Timeout | null = null;

  @state()
  protected _showContent = false;

  @state()
  protected _filteredContent!: QiskitMegaMenuDropdownContent;

  protected _clickListener!: (ev: MouseEvent) => void;

  private contentView = (content: QiskitMegaMenuDropdownContent) => html`
    <nav class="content">
      ${map(
        content,
        (block) => html`
          <div class="content__block">
            <h1 class="content__block__title">${block.title}</h1>
            <div
              class="content__block__content"
              style="--elements-count: ${block.content.length}"
            >
              ${map(block.content, this.groupView)}
            </div>
          </div>
        `
      )}
    </nav>
  `;

  private groupView = (group: QiskitMegaMenuDropdownGroup) => html`
    <div class="content__group">
      <a
        class="content__group__title content__group__link"
        href=${group.title.url}
      >
        ${this.highlightedText(group.title.label)}
      </a>
      ${map(
        group.content,
        (groupLink) => html`
          <a class="content__group__link" href=${groupLink.url}>
            ${this.highlightedText(groupLink.label)}
          </a>
        `
      )}
    </div>
  `;

  private highlightedText = (label: string) => html`
    ${map(
      this._splitTextInHighlightParts(label),
      (part) => html`<span
        class="${classMap({ 'text-highlight': part.isHighlighted })}"
        >${part.text}</span
      >`
    )}
  `;

  private emptyContentView = () => html`
    <div v-if="isFilteredContentEmpty" class="content content-empty">
      <h2 class="content-empty__title">Nothing here</h2>
      <p class="content-empty__text">Try broadening your search terms</p>
      <img
        alt="empty search"
        src="/components/mega-menu-dropdown/assets/empty-search.png"
        class="content-empty__image"
      />
    </div>
  `;

  render() {
    this._filteredContent = this._filteredContent || this.content;

    return html`
      <article class="app-mega-dropdown">
        <div class="filter">
          <input
            type="text"
            class="filter__input"
            placeholder="${this.placeholder}"
            @focus=${this._onShowContent}
            @keyup=${this._onTextOnTheFilterChanged}
          />
          <button class="filter__button" @click="${this._onSwitchShowContent}">
            ${chevronDown({ class: 'filter__icon' })}
          </button>
        </div>
        ${when(this._showContent, () =>
          this._isFilteredContentEmpty
            ? this.emptyContentView()
            : this.contentView(this._filteredContent)
        )}
      </article>
    `;
  }

  connectedCallback() {
    super.connectedCallback?.();
    this._clickListener = this._handleClick.bind(this);
    document.addEventListener('mousedown', this._clickListener);
  }

  disconnectedCallback() {
    super.disconnectedCallback?.();
    document.removeEventListener('mousedown', this._clickListener);
    this._removePerformedSearchEventTimeout();
  }

  _handleClick(e: MouseEvent) {
    if (e?.target !== this) {
      this._showContent = false;
      this._textOnTheFilter = '';
    }
  }

  get _textOnTheFilter(): string {
    return this._filterInput.value.trim();
  }

  set _textOnTheFilter(val: string) {
    this._filterInput.value = val;
  }

  get _isFilteredContentEmpty(): boolean {
    return this._filteredContent?.length === 0;
  }

  get _isFilterTextEmpty(): boolean {
    return this._textOnTheFilter === '';
  }

  _wordsOnTheFilter(): string[] {
    return this._textOnTheFilter
      .trim()
      .toLowerCase()
      .split(' ')
      .filter((word: string) => word !== '');
  }

  _onShowContent() {
    this._filteredContent = this._filterContent();
    this._showContent = true;
  }
  _onSwitchShowContent() {
    this._showContent = !this._showContent;
    if (this._showContent) {
      this._filterInput.focus();
    }
  }

  _onTextOnTheFilterChanged() {
    this._performedSearch();
    this._filteredContent = this._filterContent();
  }

  _filterContent(): QiskitMegaMenuDropdownContent {
    if (this._isFilterTextEmpty) {
      return this.content;
    }

    const wordsOnTheFilter: string[] = this._wordsOnTheFilter();

    const filteredContent = this.content.map((block) =>
      this._filterMegaDropdownBlock(block, wordsOnTheFilter)
    );

    const nonEmptyBlocksFilteredContent = filteredContent.filter(
      (block) => block.content.length > 0
    );

    return nonEmptyBlocksFilteredContent;
  }

  _filterMegaDropdownBlock(
    block: QiskitMegaMenuDropdownBlock,
    wordsOnTheFilter: string[]
  ): QiskitMegaMenuDropdownBlock {
    const filteredBlock = block.content.map((group) =>
      this._filterMegaDropdownGroup(group, wordsOnTheFilter)
    );

    const nonEmptyGroupFilteredBlock = filteredBlock.filter(
      (group) => group.content.length > 0
    );

    return {
      title: block.title,
      content: nonEmptyGroupFilteredBlock,
    };
  }

  _filterMegaDropdownGroup(
    group: QiskitMegaMenuDropdownGroup,
    wordsOnTheFilter: string[]
  ): QiskitMegaMenuDropdownGroup {
    const titleSelected = this._containsWordsOnTheFilter(
      group.title.label,
      wordsOnTheFilter
    );

    if (titleSelected) {
      return group;
    }

    const filteredLinks = group.content.filter((link: NavLink) =>
      this._containsWordsOnTheFilter(link.label, wordsOnTheFilter)
    );

    return {
      title: group.title,
      content: filteredLinks,
    };
  }

  _containsWordsOnTheFilter(label: string, wordsOnTheFilter: string[]) {
    return wordsOnTheFilter.some((word) => label.toLowerCase().includes(word));
  }

  _splitTextInHighlightParts(menuLabel: string): HighlightTextState[] {
    const isTextEmpty = menuLabel.trim() === '';
    if (this._isFilterTextEmpty || isTextEmpty) {
      return [{ text: menuLabel, isHighlighted: false }];
    }

    const charIsHighlightArray = this._splitTextInHighlightedChars(
      menuLabel,
      this._wordsOnTheFilter()
    );

    return this._joinCharsByHighlightedState(charIsHighlightArray);
  }

  _splitTextInHighlightedChars(
    menuLabel: string,
    wordsOnTheFilter: string[]
  ): HighlightTextState[] {
    const charArray = Array.from(menuLabel);
    // Assign the isHighlighted flag to each character
    const highlightStates = charArray.map<HighlightTextState>(
      (letter: string) => ({ text: letter, isHighlighted: false })
    );
    const lowerCaseText = menuLabel.toLowerCase();
    wordsOnTheFilter.forEach((word: string) => {
      // start highlighting index
      let from = lowerCaseText.indexOf(word);
      while (from >= 0) {
        // end highlighting index
        const to = from + word.length;
        for (let i = from; i < to; i++) {
          highlightStates[i].isHighlighted = true;
        }
        // the text could have the same word multiple times.
        from = lowerCaseText.indexOf(word, Math.max(to, 1));
      }
    });
    return highlightStates;
  }

  _joinCharsByHighlightedState(
    highlightStateByChar: HighlightTextState[]
  ): HighlightTextState[] {
    const output = [
      {
        text: highlightStateByChar[0].text,
        isHighlighted: highlightStateByChar[0].isHighlighted,
        index: 0,
      },
    ];

    for (let i = 1; i < highlightStateByChar.length; i++) {
      const lastCharState = output[output.length - 1];
      const currentChar = highlightStateByChar[i];
      const highlightTextContinues =
        lastCharState.isHighlighted === currentChar.isHighlighted;
      if (highlightTextContinues) {
        lastCharState.text = lastCharState.text.concat(currentChar.text);
      } else {
        output.push({
          text: currentChar.text,
          isHighlighted: currentChar.isHighlighted,
          index: i,
        });
      }
    }

    return output;
  }

  _performedSearch() {
    this._removePerformedSearchEventTimeout();
    this._performedSearchEventTimeout = setTimeout(() => {
      this._dispatchPerformedSearchEvent(this._textOnTheFilter);
    }, 750);
  }

  _removePerformedSearchEventTimeout() {
    if (this._performedSearchEventTimeout) {
      clearTimeout(this._performedSearchEventTimeout);
      this._performedSearchEventTimeout = null;
    }
  }

  _dispatchPerformedSearchEvent(text: string) {
    this.dispatchEvent(
      new CustomEvent('performedSearch', {
        detail: { text },
        bubbles: true,
        composed: true,
      })
    );
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'qiskit-mega-menu-dropdown': QiskitMegaMenuDropdown;
  }
}
