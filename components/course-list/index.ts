import { LitElement, html } from 'lit';
import type { TemplateResult } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { map } from 'lit/directives/map.js';

import styles from './index.scss';

interface NavLink {
  label: string;
  url: string;
}

interface courseListGroup {
  title: NavLink;
  content: NavLink[];
}

interface courseListBlock {
  title: string;
  content: courseListGroup[];
}

export type courseListContent = courseListBlock[];

type renderContentElementFunction = (
  element: NavLink
) => TemplateResult | string;

@customElement('course-list')
export class courseList extends LitElement {
  static styles = [styles];

  @property({ type: Array })
  content: courseListContent = [];

  @property()
  renderContentElement: renderContentElementFunction = (element) =>
    element.label;

  private groupView(group: courseListGroup) {
    return html`
      <div class="content__group">
        <a
          class="content__group__title content__group__link"
          href=${group.title.url}
        >
          ${group.title.label}
        </a>
        ${map(
          group.content,
          (groupLink) => html`
            <a class="content__group__link" href=${groupLink.url}>
              ${this.renderContentElement(groupLink)}
            </a>
          `
        )}
      </div>
    `;
  }

  render() {
    return html`
      <nav class="content">
        ${map(
          this.content,
          (block) => html`
            <div class="content__block">
              <h1 class="content__block__title">${block.title}</h1>
              <div
                class="content__block__content"
                style="--elements-count: ${block.content.length}"
              >
                ${map(block.content, (group) => this.groupView(group))}
              </div>
            </div>
          `
        )}
      </nav>
    `;
  }
}
