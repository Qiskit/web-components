import { LitElement, html } from 'lit';
import type { TemplateResult } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { map } from 'lit/directives/map.js';

import styles from './index.scss';

interface NavLink {
  label: string;
  url: string;
}

interface CourseListGroup {
  title: NavLink;
  content: NavLink[];
}

interface CourseListBlock {
  title: string;
  content: CourseListGroup[];
}

export type CourseListContent = CourseListBlock[];

type renderContentElementFunction = (
  element: NavLink
) => TemplateResult | string;

@customElement('course-list')
export class CourseList extends LitElement {
  static styles = [styles];

  @property({ type: Array })
  content: CourseListContent = [];

  @property()
  renderContentElement: renderContentElementFunction = (element) =>
    element.label;

  private groupView(group: CourseListGroup) {
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
