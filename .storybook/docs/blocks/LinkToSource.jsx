import React, {useContext} from 'react';
import {DocsContext} from '@storybook/addon-docs';
import {Button} from '@storybook/components';

const BASE_URL = 'https://github.com/aboutyou/panel-packages/-/tree/main';

/**
 * Returns a source path given the current story path, if it exists. This works
 * by assuming the story's filename is of the form `.../{basename}.stories.js`,
 * and returns the source path of `.../{basename}.vue` or `{basename}.js`,
 * whichever exists.
 *
 * For example:
 *
 * sourcePathFromStoryPath('./src/components/base/alert/alert.stories.js')
 * // => './src/components/base/alert/alert.vue'
 *
 * @param {string} Story file path, relative to the root directory of the repo.
 * @returns {string} Source file path for component or directive, relative to
 *     the root of the repo.
 */
const sourcePathFromStoryPath = (storyPath) => {
    return '';
};

export const LinkToSource = (props) => {
  const context = useContext(DocsContext);
  // There is a context.parameters.component.__file property that points to the
  // source file if it's a component, but it does not exist for directives and isn't available
  // in the production bundle.
  const storyFileName = context?.attachedCSFFile?.meta?.parameters?.fileName;
  if (!storyFileName) {
    return null;
  }
  const sourcePath = sourcePathFromStoryPath(storyFileName);
  if (!sourcePath) {
    return null;
  }
  const href = `${BASE_URL}/${sourcePath.replace(/^\.\//, '')}`;
  return (
    <Button
      data-testid="link-to-source"
      href={href}
      rel="noopener"
      target="_blank"
      isLink
      small
      {...props}
    >
      View source
    </Button>
  );
};
