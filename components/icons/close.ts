/**
 * Copyright (c) IBM, Corp. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html } from 'lit';

export const closeIcon = html`
  <svg id="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
    <title>close</title>
    <polygon
      class="cls-1"
      points="24 9.4 22.6 8 16 14.6 9.4 8 8 9.4 14.6 16 8 22.6 9.4 24 16 17.4 22.6 24 24 22.6 17.4 16 24 9.4"
    />
    <rect class="cls-2" width="32" height="32" />
    <style>
      .cls-1 {
        fill: #000000;
      }
      .cls-2 {
        fill: none;
      }
    </style>
  </svg>
`;
