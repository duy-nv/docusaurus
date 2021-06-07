/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
// eslint-disable-next-line header/header
function assertItem(
  item,
  keys,
) {
  const unknownKeys = Object.keys(item).filter(
    // @ts-expect-error: key is always string
    (key) => !keys.includes(key) && key !== 'type'
  );

  if (unknownKeys.length) {
    throw new Error(
      `Unknown spec item keys: ${unknownKeys}. Item: ${JSON.stringify(
        item,
      )}`,
    );
  }
}

function assertIsCategory(
  item
) {
  assertItem(item, ['items', 'label']);
  if (typeof item.label !== 'string') {
    throw new Error(
      `Error loading ${JSON.stringify(item)}. "label" must be a string.`,
    );
  }
  if (!Array.isArray(item.items)) {
    throw new Error(
      `Error loading ${JSON.stringify(item)}. "items" must be an array.`,
    );
  }
}

function assertIsDoc(
  item
) {
  assertItem(item, ['label']);
  if (typeof item.id !== 'string') {
    throw new Error(
      `Error loading ${JSON.stringify(item)}. "id" must be a string.`,
    );
  }

  if (item.label && typeof item.label !== 'string') {
    throw new Error(
      `Error loading ${JSON.stringify(item)}. "label" must be a string.`,
    );
  }
}

function assertIsLink(
  item
) {
  assertItem(item, ['href', 'label']);
  if (typeof item.href !== 'string') {
    throw new Error(
      `Error loading ${JSON.stringify(item)}. "href" must be a string.`,
    );
  }
  if (typeof item.label !== 'string') {
    throw new Error(
      `Error loading ${JSON.stringify(item)}. "label" must be a string.`,
    );
  }
}

function normalizeItem(item) {
  if (typeof item === 'string') {
    return [
      {
        type: 'doc',
        label: item,
        value: item
      },
    ];
  }
 
  switch (item.type) {
    case 'category':
      assertIsCategory(item);
      return [
        {
          ...item,
          items: flatMap(item.items, normalizeItem),
        },
      ];
    case 'link':
      assertIsLink(item);
      return [item];
    case 'ref':
    case 'doc':
      assertIsDoc(item);
      return [item];
    default: {
      const extraMigrationError =
        item.type === 'subcategory'
          ? "Docusaurus v2: 'subcategory' has been renamed as 'category'"
          : '';
      throw new Error(
        `Unknown sidebar item type [${
          item.type
        }]. Sidebar item=${JSON.stringify(item)} ${extraMigrationError}`,
      );
    }
  }
}

export default function normalizeSpecSelect(configs) {
  return 'test';
}