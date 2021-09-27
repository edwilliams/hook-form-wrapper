import { createGlobalStyle, css } from 'styled-components'

export const GlobalQueryBuilderStyles = createGlobalStyle(() => {
  return css`
    .qb-drag-handler,
    .qb-draggable,
    .query-builder {
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }
    .rule--header:after {
      content: '';
      display: table;
      clear: both;
    }
    .group--header,
    .group--footer {
      display: flex;
      align-items: center;
    }
    .query-builder {
      overflow: hidden;
    }
    .query-builder *,
    .query-builder *::before,
    .query-builder *::after {
      box-sizing: border-box;
    }
    body.qb-dragging .ant-tooltip {
      display: none;
    }
    .query-builder {
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
      font-size: 14px;
      line-height: 1.25;
      margin: 1rem;
    }
    .query-builder.qb-dragging {
      cursor: -webkit-grabbing !important;
      cursor: grabbing !important;
    }
    .query-builder.qb-dragging button {
      pointer-events: none;
    }
    .group {
      background: rgba(250, 240, 210, 0.5);
      border: 1px solid #dcc896;
    }
    .rule {
      background-color: white;
      border: 1px solid transparent;
      padding: 10px;
    }
    .rule-with-error .rule {
      border: 1px solid #e0a1a1;
    }
    .rule--body--wrapper {
      flex: 1;
      display: flex;
      flex-direction: column;
    }
    .rule--error {
      color: red;
      margin-bottom: -5px;
      margin-top: 5px;
    }
    .group-or-rule {
      border-radius: 5px;
      position: relative;
    }
    .rule_group {
      background: rgba(255, 252, 242, 0.5);
      border: 1px solid #f9f1dd;
    }
    .qb-draggable {
      pointer-events: none;
      position: absolute;
      opacity: 0.7;
      z-index: 1000;
    }
    .qb-placeholder {
      border: 1px dashed gray;
    }
    .ant-tooltip-inner {
      min-height: 18px;
    }
    .ant-slider {
      margin-bottom: 4px;
      margin-top: 4px;
    }
    .ant-slider-with-marks {
      margin-bottom: 10px;
      margin-top: 4px;
    }
    .ant-slider-track {
      visibility: visible !important;
    }
    .ant-select-tree-dropdown > div[role='listbox'] {
      outline: 0;
    }
    ul.ant-select-selection__rendered {
      margin-right: 11px;
    }
    .ant-select-item {
      min-height: 22px;
    }
    .group--children {
      padding-left: 24px;
    }
    .group--children > .group-or-rule-container > .group-or-rule:before {
      top: -4px;
      border-width: 0 0 2px 2px;
    }
    .group--children > .group-or-rule-container > .group-or-rule::after {
      top: 50%;
      border-width: 0 0 0 2px;
    }
    .group--children > .group-or-rule-container > .group-or-rule::before,
    .group--children > .group-or-rule-container > .group-or-rule::after {
      content: '';
      position: absolute;
      left: -14px;
      width: 14px;
      height: calc(50% + 8px);
      border-color: #ccc;
      border-style: solid;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
    }
    .group--children.hide--conjs
      > .group-or-rule-container:first-child
      > .group-or-rule::before {
      display: none;
    }
    .group--children.hide--conjs
      > .group-or-rule-container:first-child
      > .group-or-rule::after {
      border-radius: 4px 0 0 0;
      border-width: 2px 0 0 2px;
    }
    .group--children.rule_group--children
      > .group-or-rule-container:first-child
      > .group-or-rule::before {
      display: none;
    }
    .group--children.rule_group--children
      > .group-or-rule-container:first-child
      > .group-or-rule::after {
      border-radius: 4px 0 0 0;
      border-width: 2px 0 0 2px;
    }
    .group--children
      > .group-or-rule-container:first-child
      > .group-or-rule::before {
      top: -12px;
      height: calc(50% + 14px);
    }
    .group--children
      > .group-or-rule-container:last-child
      > .group-or-rule::before {
      border-radius: 0 0 0 4px;
    }
    .group--children
      > .group-or-rule-container:last-child
      > .group-or-rule::after {
      display: none;
    }
    .group--children.hide--line
      > .group-or-rule-container
      > .group-or-rule::before,
    .group--children.hide--line
      > .group-or-rule-container
      > .group-or-rule::after {
      border-color: rgba(128, 128, 128, 0.1);
    }
    .qb-draggable::before,
    .qb-draggable::after {
      display: none;
    }
    .qb-drag-handler {
      cursor: -webkit-grabbing;
      cursor: grabbing;
    }
    .group--drag-handler {
      margin-right: 8px;
      position: relative;
      top: 3px;
    }
    .group--conjunctions .group--drag-handler {
      margin-left: 10px;
    }
    .group--conjunctions.hide--conj {
      opacity: 0.3;
    }
    .group--actions {
      margin-left: 10px;
      flex: 1;
      display: flex;
    }
    .group--actions--tl,
    .group--actions--bl {
      justify-content: flex-start;
    }
    .group--actions--tl {
      margin-left: 20px;
    }
    .group--actions--tc,
    .group--actions--bc {
      justify-content: center;
    }
    .group--actions--tr,
    .group--actions--br {
      justify-content: flex-end;
    }
    .group--actions .action--DELETE {
      margin-top: -1px;
    }
    .rule_group {
      display: flex;
      padding-left: 10px;
    }
    .rule_group .group--drag-handler {
      align-self: center;
    }
    .rule_group .group--field {
      align-self: center;
    }
    .rule_group .group--actions {
      align-self: center;
      flex: 0;
    }
    .rule_group .rule_group--children {
      flex: 1;
      margin-top: 5px;
      margin-bottom: 5px;
      padding-left: 18px;
    }
    .rule_group .rule_group--children .group-or-rule-container {
      margin-bottom: 5px;
      margin-top: 5px;
      padding-right: 5px;
    }
    .rule_group .rule_group--children.one--child {
      padding-left: 10px;
    }
    .rule_group
      .rule_group--children
      > .group-or-rule-container
      > .group-or-rule::before,
    .rule_group
      .rule_group--children
      > .group-or-rule-container
      > .group-or-rule::after {
      left: -10px;
      width: 10px;
      height: calc(50% + 8px);
    }
    .group--header.hide--drag.with--conjs > .group--field--count--rule {
      margin-left: 20px;
    }
    .rule {
      flex: 1;
      display: flex;
    }
    .rule--header {
      margin-left: auto;
      display: flex;
      align-items: center;
      padding-left: 10px;
    }
    .rule--drag-handler {
      display: flex;
      align-items: center;
      margin-right: 8px;
    }
    .rule--field,
    .group--field,
    .rule--operator,
    .rule--value,
    .rule--operator-options,
    .rule--widget,
    .widget--widget,
    .widget--valuesrc,
    .widget--sep,
    .operator--options--sep,
    .rule--before-widget,
    .rule--after-widget {
      display: inline-block;
    }
    .mui .widget--sep,
    .mui .operator--options--sep,
    .mui .rule--func--bracket-before,
    .mui .rule--func--bracket-after,
    .mui .rule--func--arg-sep {
      vertical-align: bottom;
      align-self: flex-end;
      margin-bottom: 8px;
    }
    .mui .rule--operator-options {
      vertical-align: bottom;
    }
    .mui .widget--valuesrc {
      vertical-align: bottom;
    }
    .rule--operator,
    .widget--widget,
    .widget--valuesrc,
    .widget--sep {
      margin-left: 10px;
    }
    .widget--valuesrc {
      margin-right: -8px;
    }
    .widget--valuesrc span i {
      transform: rotate(90deg);
    }
    .operator--options--sep {
      margin-right: 10px;
    }
    div.tooltip-inner {
      max-width: 500px;
    }
    .rule--field label,
    .group--field label,
    .rule--operator label,
    .widget--widget label {
      display: block;
      font-weight: bold;
    }
    .conjunction {
      display: inline-block;
    }
    .conjunction label {
      display: inline-block;
      border: 1px solid;
      cursor: pointer;
      color: white;
      text-transform: uppercase;
      padding: 0.2rem 0.4rem;
    }
    .conjunction input {
      display: none;
    }
    .conjunction[data-state='active'] label {
      background-color: #3276b1;
      border-color: #285e8e;
    }
    .conjunction[data-state='inactive'] label {
      background-color: #428bca;
      border-color: #357ebd;
    }
    .conjunction[data-state='inactive'] label:hover {
      background-color: #3276b1;
      border-color: #285e8e;
    }
    .conjunction:first-child label {
      border-radius: 3px 0 0 3px;
    }
    .conjunction:last-child label {
      border-radius: 0 3px 3px 0;
    }
    .conjunction:first-child:last-child {
      border-radius: 3px;
    }
    .rule--func--wrapper,
    .rule--func,
    .rule--func--args,
    .rule--func--arg,
    .rule--func--arg-value,
    .rule--func--bracket-before,
    .rule--func--bracket-after,
    .rule--func--arg-sep,
    .rule--func--arg-label,
    .rule--func--arg-label-sep {
      display: inline-block;
    }
    .rule--func--bracket-before,
    .rule--func--bracket-after {
      margin-left: 3px;
      margin-right: 3px;
    }
    .rule--func--bracket-before {
      margin-left: 5px;
    }
    .rule--func--arg-value > .rule--widget {
      margin-left: -10px;
    }
    .rule--func--arg-sep {
      margin-left: 3px;
      margin-right: 6px;
    }
    .rule--func--arg-label-sep {
      margin-left: 1px;
      margin-right: 6px;
    }
    .qb-lite .group--drag-handler,
    .qb-lite .group--actions {
      transition: opacity 0.2s;
    }
    .qb-lite .group--header:hover .group--header .group--drag-handler,
    .qb-lite .group--header:hover .group--header .group--actions,
    .qb-lite .group--header:not(:hover) .group--drag-handler,
    .qb-lite .group--header:not(:hover) .group--actions,
    .qb-lite .rule_group:not(:hover) .group--drag-handler,
    .qb-lite .rule_group:not(:hover) .group--actions {
      opacity: 0;
    }
    .qb-lite .group--conjunctions .ant-btn:not(.ant-btn-primary),
    .qb-lite .rule_group_ext--drag-handler {
      transition: padding 0.2s;
    }
    .qb-lite
      .group--header:hover
      .group--header
      .group--conjunctions
      .ant-btn:not(.ant-btn-primary),
    .qb-lite .group--header:hover .group--header .rule_group_ext--drag-handler,
    .qb-lite
      .group--header:not(:hover)
      .group--conjunctions
      .ant-btn:not(.ant-btn-primary),
    .qb-lite .group--header:not(:hover) .rule_group_ext--drag-handler,
    .qb-lite
      .rule_group:not(:hover)
      .group--conjunctions
      .ant-btn:not(.ant-btn-primary),
    .qb-lite .rule_group:not(:hover) .rule_group_ext--drag-handler {
      width: 0;
      padding: 0;
      overflow: hidden;
      opacity: 0;
    }
    .qb-lite .widget--valuesrc,
    .qb-lite .rule--drag-handler,
    .qb-lite .rule--header {
      transition: opacity 0.2s;
    }
    .qb-lite .rule:hover .rule .widget--valuesrc,
    .qb-lite .rule:hover .rule .rule--drag-handler,
    .qb-lite .rule:hover .rule .rule--header,
    .qb-lite .rule:not(:hover) .widget--valuesrc,
    .qb-lite .rule:not(:hover) .rule--drag-handler,
    .qb-lite .rule:not(:hover) .rule--header {
      opacity: 0;
    }
    .qb-lite.qb-dragging .widget--valuesrc,
    .qb-lite.qb-dragging .rule--drag-handler,
    .qb-lite.qb-dragging .rule--header,
    .qb-lite.qb-dragging .group--drag-handler,
    .qb-lite.qb-dragging .group--actions {
      opacity: 0 !important;
    }
    .qb-lite.qb-dragging .group--conjunctions .ant-btn:not(.ant-btn-primary),
    .qb-lite.qb-dragging .rule_group_ext--drag-handler {
      width: 0 !important;
      padding: 0 !important;
      overflow: hidden !important;
      opacity: 0 !important;
    }
    .group--header,
    .group--footer {
      padding-left: 10px;
      padding-right: 10px;
      margin-top: 10px;
      margin-bottom: 10px;
    }
    .group-or-rule-container {
      margin-top: 10px;
      margin-bottom: 10px;
      padding-right: 10px;
    }
    .group-or-rule-container:first-child {
      margin-top: 0 !important;
    }
    .group-or-rule-container:last-child {
      margin-bottom: 0 !important;
    }
    .group--children {
      margin-top: 10px;
      margin-bottom: 10px;
    }
    .rule--body.can--shrink--value {
      display: flex;
      align-items: center;
    }
    .rule--body.can--shrink--value .rule--value {
      flex: 1;
    }
    .rule--body.can--shrink--value .rule--value > .rule--widget {
      display: flex;
    }
    .rule--body.can--shrink--value
      .rule--value
      > .rule--widget
      .widget--widget {
      flex: 1;
    }
    .rule--body.can--shrink--value
      .rule--value
      > .rule--widget
      > .widget--valuesrc {
      display: flex;
      align-items: center;
    }
    .rule--value > .rule--widget > .widget--valuesrc .anticon {
      height: 100%;
    }
    .rule--value > .rule--widget > .widget--valuesrc .anticon svg {
      height: 100%;
    }
  `
})
