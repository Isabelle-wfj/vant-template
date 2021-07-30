import { CliConfig } from '../../config';
import {
  url,
  Rule,
  applyTemplates,
  move,
  chain,
  mergeWith,
  MergeStrategy,
  apply
} from '@angular-devkit/schematics';
import { setConfigToOptions } from '../../utils/options';
import { normalize } from 'path';
import { strings } from '@angular-devkit/core';

export function functionalComponent(options: CliConfig): Rule {
  return () => {
    // 设置默认和用户配置
    options = setConfigToOptions(options);

    const movePath = normalize(options.functionalComponentPath);
    const templateSource = apply(url('./templates'), [
      applyTemplates({
        ...strings,
        ...options
      }),
      move(movePath)
    ]);
    return chain([
      mergeWith(templateSource, MergeStrategy.Overwrite)
    ]);
  };
}