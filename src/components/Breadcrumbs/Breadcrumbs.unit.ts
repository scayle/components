import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import Breadcrumbs from './Breadcrumbs.vue';
import type { Breadcrumbs as BreadcrumbsList, Breadcrumb } from './Breadcrumbs.vue';

const breadcrumbs: BreadcrumbsList = [
    {
        href: '#',
        name: 'Test',
    },
    {
        href: '#',
        name: 'Test 2',
    },
    {
        href: '#',
        name: 'Test 3',
    },
    {
        name: 'Test 4',
    },
];

describe('Breadcrumbs.vue', () => {
    it('should display every single breadcrumb if they are less than 4', async () => {
        const modifiedBreadcrumbs: BreadcrumbsList = breadcrumbs.splice(0, breadcrumbs.length - 1);
        const wrapper = mount(Breadcrumbs, {
            props: {
                breadcrumbs: modifiedBreadcrumbs,
            },
        });

        modifiedBreadcrumbs.forEach((crumb: Breadcrumb) => {
            expect(wrapper.html()).toContain(crumb.name);
        });
    });

    it('should render only the first and last breadcrumb when there are 4 or more items', async () => {
        const wrapper = mount(Breadcrumbs, {
            props: {
                breadcrumbs,
            },
        });

        // First breadcrumb item
        expect(wrapper.html()).toContain(breadcrumbs[0].name);
        // Last breadcrumb item
        expect(wrapper.html()).toContain(breadcrumbs[breadcrumbs.length - 1].name);
    });
});
