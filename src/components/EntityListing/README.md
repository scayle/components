
Building blocks to create a full functioning listing of items. Customizable based on use cases.

### Component structure

```vue

<template>
  <EntityContainer default-tab="shops">
    <template #before-tabs>
      <AppHeader title="Entity List">
        <div class="flex self-center mis-auto">
          <SearchInput v-model="search" size="small"/>

          <button class="ay-entity-container__button">+ New</button>
        </div>
      </AppHeader>
    </template>

    <EntityTab name="shops" tab-label="Shops" :badge-text="shops.length">
      <template #header>
        <h4>Shops {{ shops.length }}</h4>
      </template>

      <EntityList v-if="shops.length" :loading="loading" :can-load-more="hasMore" @load-more="$emit('load-more')">
        <EntityListItem :key="shop.id" v-for="shop in shops">
          <EntityListItemAvatar :title="shop.title" :subtitle="shop.subtitle" :avatar-initials="shop.initials"/>
          <EntityListItemContent>
            <EntityListItemKeyValue label="ID" :value="shop.id"/>
            <EntityListItemKeyValue label="key" :value="shop.key"/>
          </EntityListItemContent>

          <EntityListItemBadges>
            <Badge v-if="!shop.isActive" label="Closed" type="danger"/>
            <Badge v-else label="Active"/>

            <Badge v-if="shop.isShared" label="Shared Tree" type="secondary"/>
            </EntityListItemBadges>

            <EntityListItemActions>
              <button v-if="hasFavorites" class="p-2" type="button" @click.prevent.stop="$emit('favorite', shop)">
                <IconStarFill v-if="inFavorites(shop)" class="icon text-yellow"/>
                <IconStar v-else class="icon text-secondary"/>
              </button>

              <Dropdown trigger="click">
                <button class="p-2" type="button">
                  <IconMore class="icon text-dark-grey"/>
                </button>

                <template #dropdown="{ onClick }">
                  <DropdownMenu>
                    <DropdownItem>
                      <IconCopy class="icon icon-sm"/>
                      <span class="icon-label">Copy</span>
                    </DropdownItem>
                  </DropdownMenu>
                </template>
              </Dropdown>
            </EntityListItemActions>
          </EntityListItem>
        </EntityList>

        <div v-else class="flex flex-col items-center py-8 m-0 text-center">
          <IconBasket class="icon icon-xl mb-2 w-full text-primary"/>
          <h4>No Shops</h4>
        </div>
      </EntityTab>
  </EntityContainer>
</template>

<script>
import {
  Badge,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  SearchInput,
  AppHeader,
  EntityTab,
  EntityContainer,
  EntityList,
  EntityListItem,
  EntityListItemAvatar,
  EntityListItemContent,
  EntityListItemKeyValue,
  EntityListItemBadges,
  EntityListItemActions,
} from '@scayle/components';

export default {
  components: {
    Badge,
    Dropdown,
    EntityTab,
    EntityList,
    DropdownItem,
    DropdownMenu,
    EntityListItem,
    EntityListItemBadges,
    EntityListItemAvatar,
    EntityListItemContent,
    EntityListItemActions,
    EntityListItemKeyValue,
    SearchInput,
    AppHeader,
    EntityContainer,
  },
}
</script>
```
