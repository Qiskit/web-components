/**
 * Copyright (c) IBM, Corp. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LitElement, html } from 'lit';
import { property, customElement, query } from 'lit/decorators.js';
import { map } from 'lit/directives/map.js';
import { when } from 'lit/directives/when.js';

import styles from './index.scss';

interface NavLink {
  label: string;
  url: string;
}

interface MegaMenuDropdownGroup {
  title: NavLink;
  content: NavLink[];
}

// type MegaMenuDropdownColumn = MegaMenuDropdownGroup[];

interface MegaMenuDropdownBlock {
  title: string;
  content: MegaMenuDropdownGroup[];
}

type MegaMenuDropdownContent = MegaMenuDropdownBlock[];

const contentView = (content: MegaMenuDropdownContent) => html`
  <nav class="app-mega-dropdown__content">
    ${map(
      content,
      (block) => html`
        <div class="app-mega-dropdown__content__block">
          <h1 class="app-mega-dropdown__content__block__title">
            ${block.title}
          </h1>
          <div
            class="app-mega-dropdown__content__block__content"
            style="--row-count-l: ${Math.ceil(40 / 3)}"
          >
            ${map(block.content, groupView)}
          </div>
        </div>
      `
    )}
  </nav>
`;

const groupView = (group: MegaMenuDropdownGroup) => html`
  <div
    class="app-mega-dropdown__content__group"
    style="--span: ${group.content.length + 2}"
  >
    <h2 class="app-mega-dropdown__content__group__title">
      <a href=${group.title.url}>${group.title.label}</a>
    </h2>
    ${map(
      group.content,
      (groupLink) => html`
        <a
          class="app-mega-dropdown__content__group__item__link"
          href=${groupLink.url}
        >
          ${groupLink.label}
        </a>
      `
    )}
  </div>
`;

const emptyContentView = () => html`
  <div v-if="isFilteredContentEmpty" class="app-mega-dropdown__content-empty">
    <h2 class="app-mega-dropdown__content-empty__title">Nothing here</h2>
    <p class="app-mega-dropdown__content-empty__text">
      Try broadening your search terms
    </p>
    <img
      alt="empty search"
      :src="emptySearchImage"
      class="app-mega-dropdown__content-empty__image"
    />
  </div>
`;
/*
          <!--QiskitBasicLink
            class="
              app-mega-dropdown__content-link
              app-mega-dropdown__content-link_title
            "
            :url="group.title.url"
          >
            <span
              v-for="part in splitTextInHighlightParts(group.title.label)"
              :key="`${ part.index } -${ part.text.length } `"
              :class="{
                'app-mega-dropdown__content-link__text-highlight':
                  part.isHighlighted,
              }"
              >{{ part.text }}</span
            >
          </QiskitBasicLink-->
          <!--QiskitBasicLink
            v-for="chapter in group.content"
            :key="chapter.label"
            class="app-mega-dropdown__content-link"
            :url="chapter.url"
          >
            <span
              v-for="part in splitTextInHighlightParts(chapter.label)"
              :key="`${ part.index } -${ part.text.length } `"
              :class="{
                'app-mega-dropdown__content-link__text-highlight':
                  part.isHighlighted,
              }"
              >{{ part.text }}</span
            >
          </QiskitBasicLink-->

          */

@customElement('mega-menu-dropdown')
export class MegaMenuDropdown extends LitElement {
  static styles = [styles];

  @query('.filter__input')
  protected _filterInput!: HTMLInputElement;

  @property()
  placeholder = 'Browse all content';

  @property({ type: Array })
  content: MegaMenuDropdownContent = [];

  protected _performedSearchEventTimeout: NodeJS.Timeout | null = null;

  protected _showContent = true;

  protected _filteredContent!: MegaMenuDropdownContent;

  render() {
    this._filteredContent = this._filteredContent || this.content;

    return html`
      <article class="app-mega-dropdown">
        <label class="filter__wrapper">
          <input
            type="text"
            class="filter__input"
            placeholder="${this.placeholder}"
            @focus=${this._onShowContent}
            @keyup=${this._onTextOnTheFilterChanged}
          />
          <!--svg
            class="filter__icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
          >
            <path d="M16 22L6 12l1.4-1.4 8.6 8.6 8.6-8.6L26 12z" />
          </svg-->
        </label>
        ${when(this._showContent, () =>
          this._isFilteredContentEmpty
            ? emptyContentView()
            : contentView(this._filteredContent)
        )}
      </article>
    `;
  }

  get _textOnTheFilter(): string {
    return this._filterInput.value.trim();
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
    return;
  }

  _onTextOnTheFilterChanged() {
    console.log(this._textOnTheFilter);
    this._performedSearch();
    // this._filteredContent = this._filterContent()
    this._filteredContent = this.content;
  }

  /*
  _filterContent(): MegaMenuDropdownContent {
    if (this._isFilterTextEmpty) {
      return this.content;
    }

    const wordsOnTheFilter: string[] = this._wordsOnTheFilter();
    const filteredContent = this.content.map(
      block => this._filterMegaDropdownBlock(block, wordsOnTheFilter)
    );

    const nonEmptyColumnsFilteredContent = filteredContent.filter(
      (column: MegaMenuDropdownBlock) => column.length > 0
    );
    
    return nonEmptyColumnsFilteredContent;
  }

  _filterMegaDropdownBlock(
    block: MegaMenuDropdownBlock,
    wordsOnTheFilter: string[]
  ): MegaMenuDropdownBlock {
    const filteredBlock = block.map((column) =>
      this._filterMegaDropdownColumn(column, wordsOnTheFilter)
    );
    const nonEmptyColumnsFilteredBlock = filteredBlock.filter(
      (block) => block.length > 0
    );
    return nonEmptyGroupsFilteredColumn;
  }

  _filterMegaDropdownColumn(
    column: MegaMenuDropdownColumn,
    wordsOnTheFilter: string[]
  ): MegaMenuDropdownColumn {
    const filteredColumn = column.map((group: MegaMenuDropdownGroup) =>
      this._filterMegaDropdownGroupLinks(group, wordsOnTheFilter)
    );
    const nonEmptyGroupsFilteredColumn = filteredColumn.filter(
      (group: MegaMenuDropdownGroup) => group.content.length > 0
    );
    return nonEmptyGroupsFilteredColumn;
  }

  _filterMegaDropdownGroupLinks(
    group: MegaMenuDropdownGroup,
    wordsOnTheFilter: string[]
  ): MegaMenuDropdownGroup {
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
  */

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
    'mega-menu-dropdown': MegaMenuDropdown;
  }
}
