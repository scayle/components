/**
 * Internal dependencies.
 */
import { default as _EntityContainer } from './EntityContainer.vue';
import { default as _EntityTab } from './EntityTab.vue';
import { default as _EntityList } from './EntityList/EntityList.vue';
import { default as _EntityListItem } from './EntityListItem/EntityListItem.vue';
import { default as _EntityListItemActions } from './EntityListItem/EntityListItemActions.vue';
import { default as _EntityListItemAvatar } from './EntityListItem/EntityListItemAvatar.vue';
import { default as _EntityListItemBadges } from './EntityListItem/EntityListItemBadges.vue';
import { default as _EntityListItemContent } from './EntityListItem/EntityListItemContent.vue';
import { default as _EntityListItemKeyValue } from './EntityListItem/EntityListItemKeyValue.vue';
import { withPlugin } from '@/utils';

export const EntityContainer = withPlugin(_EntityContainer);
export const EntityTab = withPlugin(_EntityTab);
export const EntityList = withPlugin(_EntityList);
export const EntityListItem = withPlugin(_EntityListItem);
export const EntityListItemActions = withPlugin(_EntityListItemActions);
export const EntityListItemBadges = withPlugin(_EntityListItemBadges);
export const EntityListItemAvatar = withPlugin(_EntityListItemAvatar);
export const EntityListItemContent = withPlugin(_EntityListItemContent);
export const EntityListItemKeyValue = withPlugin(_EntityListItemKeyValue);
