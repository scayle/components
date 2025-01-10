import React, {useContext} from 'react';
import {DocsContext} from '@storybook/addon-docs';
import {SyntaxHighlighter} from '@storybook/components';

export const ImportInfo = () => {
  const context = useContext(DocsContext);
  const componentName = context?.attachedCSFFile?.meta?.component?.name;
  if (!componentName) {
    return null;
  }
  const importStatement = `import { ${componentName} } from '@scayle/components';`;
  return (
      <div>
          <SyntaxHighlighter data-testid="import-info" copyable bordered>
              {importStatement}
          </SyntaxHighlighter>
      </div>
  );
};
