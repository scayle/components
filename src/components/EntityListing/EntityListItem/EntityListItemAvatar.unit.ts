/**
 * External dependencies.
 */
import { mount } from '@vue/test-utils';
import { it, describe, expect } from 'vitest';

/**
 * Internal dependencies.
 */
import EntityListItemAvatar from './EntityListItemAvatar.vue';

describe('EntityListItemAvatar.vue', () => {
    it('shows spinner instead of subtitle if subtitle prop is not set', () => {
        const wrapper = mount(EntityListItemAvatar, {
            props: {
                title: 'Testing',
            },
        });

        expect(wrapper.find('.ay-entity-list__item-avatar-loader').exists()).toBeTruthy();
        expect(wrapper.find('.ay-entity-list__item-avatar-subtitle').exists()).toBeFalsy();
    });

    it('shows the subtitle if we pass subtitle prop', () => {
        const wrapper = mount(EntityListItemAvatar, {
            props: {
                title: 'Testing',
                subtitle: 'test',
            },
        });

        expect(wrapper.find('.ay-entity-list__item-avatar-subtitle').exists()).toBeTruthy();
        expect(wrapper.find('.ay-entity-list__item-avatar-loader').exists()).toBeFalsy();
    });

    it('does not show the avatar if we do not pass avatar url nor avatar initials', () => {
        const wrapper = mount(EntityListItemAvatar, {
            props: {
                title: 'Testing',
            },
        });

        expect(wrapper.find('.ay-entity-list__item-avatar').exists()).toBeFalsy();
    });

    it('shows avatar image url if we pass avatar url prop', () => {
        const wrapper = mount(EntityListItemAvatar, {
            props: {
                title: 'Testing',
                avatarUrl: 'image.png',
            },
        });

        const avatarImage = wrapper.find('.ay-entity-list__item-avatar-image');

        expect(avatarImage.exists()).toBeTruthy();
        expect(wrapper.find('.ay-entity-list__item-avatar-initials').exists()).toBeFalsy();

        expect(avatarImage.attributes().src).toEqual('image.png');
    });

    it('shows avatar initials if we pass avatar initials prop', () => {
        const wrapper = mount(EntityListItemAvatar, {
            props: {
                title: 'Testing',
                avatarInitials: 'INT',
            },
        });

        const avatarInitials = wrapper.find('.ay-entity-list__item-avatar-initials');

        expect(avatarInitials.exists()).toBeTruthy();
        expect(wrapper.find('.ay-entity-list__item-avatar-image').exists()).toBeFalsy();

        expect(avatarInitials.text()).toEqual('INT');
    });

    it('shows avatar image url even if we pass avatar initials', () => {
        const wrapper = mount(EntityListItemAvatar, {
            props: {
                title: 'Testing',
                avatarInitials: 'INT',
                avatarUrl: 'image.png',
            },
        });

        expect(wrapper.find('.ay-entity-list__item-avatar-image').exists()).toBeTruthy();
        expect(wrapper.find('.ay-entity-list__item-avatar-initials').exists()).toBeFalsy();
    });
});
