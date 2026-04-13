import {
  type ContrastColors,
  type PaletteColors,
  type TokenColor,
} from '../../types';

export function createTokenColors({
  contrastColors,
  paletteColors,
}: {
  contrastColors: ContrastColors;
  paletteColors: PaletteColors;
}): TokenColor[] {
  return [
    {
      name: 'Keyword',
      scope: [
        'keyword.operator.delete',
        'keyword.operator.expression',
        'keyword.operator.new',
        'keyword',
        'storage.type.class',
        'storage.type.enum',
        'storage.type.extends',
        'storage.type.function',
        'storage.type.interface',
        'storage.type.property',
      ].join(', '),
      settings: {
        foreground: paletteColors.red,
      },
    },
    {
      name: 'Debug',
      scope: 'keyword.other.debugger',
      settings: {
        foreground: paletteColors.red,
      },
    },
    {
      name: 'Storage',
      scope: [
        'entity.name.tag',
        'keyword.control.case',
        'keyword.control.switch',
        'keyword.var',
        'modifier',
        'storage',
      ].join(', '),
      settings: {
        foreground: paletteColors.orange,
      },
    },
    {
      name: 'Operator',
      scope: 'keyword.operator',
      settings: {
        foreground: paletteColors.orange,
      },
    },
    {
      name: 'String',
      scope: [
        'punctuation.definition.string.begin',
        'punctuation.definition.string.end',
        'punctuation.definition.string.template.begin',
        'punctuation.definition.string.template.end',
        'string',
      ].join(', '),
      settings: {
        foreground: paletteColors.yellow,
      },
    },
    {
      name: 'Attribute',
      scope: 'entity.other.attribute-name',
      settings: {
        foreground: paletteColors.yellow,
      },
    },
    {
      name: 'String Escape',
      scope: [
        'constant.character.escape',
        'constant.other.placeholder',
        'punctuation.definition.template-expression',
        'punctuation.quasi.element',
        'punctuation.section.embedded',
        'storage.type.format',
        'variable.interpolation',
      ].join(', '),
      settings: {
        foreground: paletteColors.green,
      },
    },
    {
      name: 'Function',
      scope: [
        'entity.name.function',
        'meta.definition.method',
        'meta.function-call',
        'meta.function',
        'support.function',
      ].join(', '),
      settings: {
        foreground: paletteColors.green,
      },
    },
    {
      name: 'Preproc',
      scope: [
        'entity.name.scope-resolution',
        'entity.name.type.namespace',
        'keyword.control.at-rule',
        'keyword.control.directive',
        'keyword.control.export',
        'keyword.control.import',
        'keyword.import',
        'keyword.map',
        'keyword.other.import',
        'keyword.other.package',
        'keyword.other.using',
        'keyword.package',
        'keyword.preprocessor',
        'punctuation.decorator',
        'punctuation.definition.directive',
        'punctuation.definition.preprocessor',
        'storage.type.namespace',
      ].join(', '),
      settings: {
        foreground: paletteColors.aqua,
      },
    },
    {
      name: 'Annotation',
      scope: 'storage.type.annotation',
      settings: {
        foreground: paletteColors.aqua,
      },
    },
    {
      name: 'Label',
      scope: ['constant.other.label', 'entity.name.label'].join(', '),
      settings: {
        foreground: paletteColors.aqua,
      },
    },
    {
      name: 'Modules',
      scope: [
        'entity.name.type.class.module',
        'entity.name.type.module',
        'keyword.control.module',
        'support.module',
        'support.node',
        'support.other.module',
        'support.type.object.module',
      ].join(', '),
      settings: {
        foreground: paletteColors.aqua,
      },
    },
    {
      name: 'Type',
      scope: [
        'entity.name.type',
        'keyword.type',
        'storage.type',
        'support.type',
      ].join(', '),
      settings: {
        foreground: paletteColors.blue,
      },
    },
    {
      name: 'Class',
      scope: [
        'entity.name.class',
        'entity.name.type.class',
        'entity.other.inherited-class',
        'storage.class',
        'support.class',
      ].join(', '),
      settings: {
        foreground: paletteColors.blue,
      },
    },
    {
      name: 'Number',
      scope: 'constant.numeric',
      settings: {
        foreground: paletteColors.purple,
      },
    },
    {
      name: 'Boolean',
      scope: 'constant.language.boolean',
      settings: {
        foreground: paletteColors.purple,
      },
    },
    {
      name: 'Macro',
      scope: 'entity.name.function.preprocessor',
      settings: {
        foreground: paletteColors.purple,
      },
    },
    {
      name: 'Special identifier',
      scope: [
        'constant.language.nan',
        'constant.language.null',
        'constant.language.undefined',
        'keyword.other.this',
        'variable.language.self',
        'variable.language.special',
        'variable.language.super',
        'variable.language.this',
      ].join(', '),
      settings: {
        foreground: paletteColors.purple,
      },
    },
    {
      name: 'Constant',
      scope: ['constant.language', 'support.constant'].join(', '),
      settings: {
        foreground: paletteColors.purple,
      },
    },
    {
      name: 'Identifier',
      scope: ['meta.definition.variable', 'support.variable', 'variable'].join(
        ', ',
      ),
      settings: {
        foreground: paletteColors.fg,
      },
    },
    {
      name: 'Property',
      scope: [
        'meta.object-literal.key',
        'support.variable.property',
        'variable.object.property',
        'variable.other.enummember',
        'variable.other.member',
        'variable.other.object.property',
        'variable.other.property',
      ].join(', '),
      settings: {
        foreground: paletteColors.fg,
      },
    },
    {
      name: 'Delimiter',
      scope: [
        'meta.brace',
        'meta.bracket',
        'meta.delimiter',
        'punctuation',
      ].join(', '),
      settings: {
        foreground: paletteColors.fg,
      },
    },
    {
      name: 'Markdown heading1',
      scope: ['heading.1.markdown', 'markup.heading.setext.1.markdown'].join(
        ', ',
      ),
      settings: {
        foreground: paletteColors.red,
        fontStyle: 'bold',
      },
    },
    {
      name: 'Markdown heading2',
      scope: ['heading.2.markdown', 'markup.heading.setext.2.markdown'].join(
        ', ',
      ),
      settings: {
        foreground: paletteColors.orange,
        fontStyle: 'bold',
      },
    },
    {
      name: 'Markdown heading3',
      scope: 'heading.3.markdown',
      settings: {
        foreground: paletteColors.yellow,
        fontStyle: 'bold',
      },
    },
    {
      name: 'Markdown heading4',
      scope: 'heading.4.markdown',
      settings: {
        foreground: paletteColors.green,
        fontStyle: 'bold',
      },
    },
    {
      name: 'Markdown heading5',
      scope: 'heading.5.markdown',
      settings: {
        foreground: paletteColors.blue,
        fontStyle: 'bold',
      },
    },
    {
      name: 'Markdown heading6',
      scope: 'heading.6.markdown',
      settings: {
        foreground: paletteColors.purple,
        fontStyle: 'bold',
      },
    },
    {
      name: 'Markdown heading delimiter',
      scope: 'punctuation.definition.heading.markdown',
      settings: {
        foreground: contrastColors.grey1,
        fontStyle: 'regular',
      },
    },
    {
      name: 'Markdown link',
      scope: [
        'constant.other.reference.link.markdown',
        'string.other.link.description.markdown',
        'string.other.link.title.markdown',
      ].join(', '),
      settings: {
        foreground: paletteColors.purple,
        fontStyle: 'regular',
      },
    },
    {
      name: 'Markdown link text',
      scope: [
        'markup.underline.link.image.markdown',
        'markup.underline.link.markdown',
      ].join(', '),
      settings: {
        foreground: paletteColors.green,
        fontStyle: 'underline',
      },
    },
    {
      name: 'Markdown delimiter',
      scope: [
        'punctuation.definition.constant.markdown',
        'punctuation.definition.italic.markdown',
        'punctuation.definition.metadata.markdown',
        'punctuation.definition.quote.begin.markdown',
        'punctuation.definition.string.begin.markdown',
        'punctuation.definition.string.end.markdown',
        'punctuation.separator.key-value.markdown',
      ].join(', '),
      settings: {
        foreground: contrastColors.grey1,
      },
    },
    {
      name: 'Markdown bold delimiter',
      scope: 'punctuation.definition.bold.markdown',
      settings: {
        foreground: contrastColors.grey1,
        fontStyle: 'regular',
      },
    },
    {
      name: 'Markdown separator delimiter',
      scope: [
        'meta.separator.markdown',
        'punctuation.definition.constant.begin.markdown',
        'punctuation.definition.constant.end.markdown',
      ].join(', '),
      settings: {
        foreground: contrastColors.grey1,
        fontStyle: 'bold',
      },
    },
    {
      name: 'Markdown italic',
      scope: 'markup.italic',
      settings: {
        fontStyle: 'italic',
      },
    },
    {
      name: 'Markdown bold',
      scope: 'markup.bold',
      settings: {
        fontStyle: 'bold',
      },
    },
    {
      name: 'Markdown bold italic',
      scope: ['markup.bold markup.italic', 'markup.italic markup.bold'].join(
        ', ',
      ),
      settings: {
        fontStyle: 'italic bold',
      },
    },
    {
      name: 'Markdown code delimiter',
      scope: [
        'punctuation.definition.markdown',
        'punctuation.definition.raw.markdown',
      ].join(', '),
      settings: {
        foreground: paletteColors.yellow,
      },
    },
    {
      name: 'Markdown code type',
      scope: 'fenced_code.block.language',
      settings: {
        foreground: paletteColors.yellow,
      },
    },
    {
      name: 'Markdown code block',
      scope: [
        'markup.fenced_code.block.markdown',
        'markup.inline.raw.string.markdown',
      ].join(', '),
      settings: {
        foreground: paletteColors.green,
      },
    },
    {
      name: 'Markdown list mark',
      scope: 'punctuation.definition.list.begin.markdown',
      settings: {
        foreground: paletteColors.red,
      },
    },
    {
      name: 'reStructuredText heading',
      scope: 'punctuation.definition.heading.restructuredtext',
      settings: {
        foreground: paletteColors.orange,
        fontStyle: 'bold',
      },
    },
    {
      name: 'reStructuredText delimiter',
      scope: [
        'punctuation.definition.constant.restructuredtext',
        'punctuation.definition.directive.restructuredtext',
        'punctuation.definition.field.restructuredtext',
        'punctuation.definition.italic.restructuredtext',
        'punctuation.definition.table.restructuredtext',
        'punctuation.separator.key-value.restructuredtext',
      ].join(', '),
      settings: {
        foreground: contrastColors.grey1,
      },
    },
    {
      name: 'reStructuredText delimiter bold',
      scope: 'punctuation.definition.bold.restructuredtext',
      settings: {
        foreground: contrastColors.grey1,
        fontStyle: 'regular',
      },
    },
    {
      name: 'reStructuredText aqua',
      scope: [
        'entity.name.tag.restructuredtext',
        'punctuation.definition.link.restructuredtext',
        'punctuation.definition.raw.restructuredtext',
        'punctuation.section.raw.restructuredtext',
      ].join(', '),
      settings: {
        foreground: paletteColors.aqua,
      },
    },
    {
      name: 'reStructuredText purple',
      scope: 'constant.other.footnote.link.restructuredtext',
      settings: {
        foreground: paletteColors.purple,
      },
    },
    {
      name: 'reStructuredText red',
      scope: 'support.directive.restructuredtext',
      settings: {
        foreground: paletteColors.red,
      },
    },
    {
      name: 'reStructuredText green',
      scope: [
        'entity.name.directive.restructuredtext',
        'markup.raw.inner.restructuredtext',
        'markup.raw.restructuredtext',
        'string.other.link.title.restructuredtext',
      ].join(', '),
      settings: {
        foreground: paletteColors.green,
      },
    },
    {
      name: 'LaTex delimiter',
      scope: [
        'constant.character.newline.tex',
        'punctuation.definition.function.latex',
        'punctuation.definition.function.tex',
        'punctuation.definition.keyword.latex',
        'punctuation.definition.keyword.tex',
      ].join(', '),
      settings: {
        foreground: contrastColors.grey1,
      },
    },
    {
      name: 'LaTex red',
      scope: 'support.function.be.latex',
      settings: {
        foreground: paletteColors.red,
      },
    },
    {
      name: 'LaTex orange',
      scope: [
        'keyword.control.table.cell.latex',
        'keyword.control.table.newline.latex',
        'support.function.section.latex',
      ].join(', '),
      settings: {
        foreground: paletteColors.orange,
      },
    },
    {
      name: 'LaTex yellow',
      scope: [
        'constant.other.reference.label.latex',
        'support.class.latex',
        'variable.parameter.definition.label.latex',
        'variable.parameter.function.latex',
        'variable.parameter.latex',
      ].join(', '),
      settings: {
        foreground: paletteColors.yellow,
      },
    },
    {
      name: 'LaTex purple',
      scope: 'keyword.control.preamble.latex',
      settings: {
        foreground: paletteColors.purple,
      },
    },
    {
      name: 'Html grey',
      scope: 'punctuation.separator.namespace.xml',
      settings: {
        foreground: contrastColors.grey1,
      },
    },
    {
      name: 'Html orange',
      scope: [
        'entity.name.tag.html',
        'entity.name.tag.localname.xml',
        'entity.name.tag.xml',
      ].join(', '),
      settings: {
        foreground: paletteColors.orange,
      },
    },
    {
      name: 'Html yellow',
      scope: [
        'entity.other.attribute-name.html',
        'entity.other.attribute-name.localname.xml',
        'entity.other.attribute-name.xml',
      ].join(', '),
      settings: {
        foreground: paletteColors.yellow,
      },
    },
    {
      name: 'Html green',
      scope: [
        'meta.tag.block.any.html',
        'meta.tag.inline.any.html',
        'meta.tag.other.html',
        'meta.tag.preprocessor.xml',
        'meta.tag.xml',
        'punctuation.definition.string.begin.html',
        'punctuation.definition.string.begin.xml',
        'punctuation.definition.string.end.html',
        'punctuation.definition.string.end.xml',
        'punctuation.definition.tag.begin.html',
        'punctuation.definition.tag.end.html',
        'punctuation.definition.tag.xml',
        'punctuation.separator.key-value.html',
        'string.quoted.double.html',
        'string.quoted.double.xml',
        'string.quoted.single.html',
        'string.quoted.single.xml',
      ].join(', '),
      settings: {
        foreground: paletteColors.green,
      },
    },
    {
      name: 'Html purple',
      scope: [
        'meta.tag.sgml.doctype.xml',
        'variable.language.documentroot.xml',
      ].join(', '),
      settings: {
        foreground: paletteColors.purple,
      },
    },
    {
      name: 'Proto yellow',
      scope: 'storage.type.proto',
      settings: {
        foreground: paletteColors.yellow,
      },
    },
    {
      name: 'Proto green',
      scope: [
        'string.quoted.double.proto.syntax',
        'string.quoted.double.proto',
        'string.quoted.single.proto.syntax',
        'string.quoted.single.proto',
      ].join(', '),
      settings: {
        foreground: paletteColors.green,
      },
    },
    {
      name: 'Proto aqua',
      scope: [
        'entity.name.class.message.proto',
        'entity.name.class.proto',
      ].join(', '),
      settings: {
        foreground: paletteColors.aqua,
      },
    },
    {
      name: 'CSS grey',
      scope: [
        'punctuation.definition.entity.css',
        'punctuation.separator.key-value.css',
        'punctuation.separator.list.comma.css',
        'punctuation.terminator.rule.css',
      ].join(', '),
      settings: {
        foreground: contrastColors.grey1,
      },
    },
    {
      name: 'CSS red',
      scope: 'entity.other.attribute-name.class.css',
      settings: {
        foreground: paletteColors.red,
      },
    },
    {
      name: 'CSS orange',
      scope: 'keyword.other.unit',
      settings: {
        foreground: paletteColors.orange,
      },
    },
    {
      name: 'CSS yellow',
      scope: [
        'entity.other.attribute-name.pseudo-class.css',
        'entity.other.attribute-name.pseudo-element.css',
      ].join(', '),
      settings: {
        foreground: paletteColors.yellow,
      },
    },
    {
      name: 'CSS green',
      scope: [
        'constant.numeric.css',
        'meta.property-value.css',
        'punctuation.definition.string.begin.css',
        'punctuation.definition.string.end.css',
        'string.quoted.double.css',
        'string.quoted.single.css',
        'support.constant.font-name.css',
        'support.constant.property-value.css',
        'variable.parameter.keyframe-list.css',
      ].join(', '),
      settings: {
        foreground: paletteColors.green,
      },
    },
    {
      name: 'CSS aqua',
      scope: 'support.type.property-name.css',
      settings: {
        foreground: paletteColors.aqua,
      },
    },
    {
      name: 'CSS blue',
      scope: 'support.type.vendored.property-name.css',
      settings: {
        foreground: paletteColors.blue,
      },
    },
    {
      name: 'CSS purple',
      scope: [
        'entity.name.tag.css',
        'entity.other.keyframe-offset.css',
        'keyword.control.at-rule.keyframes.css',
        'meta.selector.css',
        'punctuation.definition.keyword.css',
      ].join(', '),
      settings: {
        foreground: paletteColors.purple,
      },
    },
    {
      name: 'SASS grey',
      scope: [
        'punctuation.definition.entity.scss',
        'punctuation.separator.key-value.scss',
        'punctuation.separator.list.comma.scss',
        'punctuation.terminator.rule.scss',
      ].join(', '),
      settings: {
        foreground: contrastColors.grey1,
      },
    },
    {
      name: 'SASS orange',
      scope: 'keyword.control.at-rule.keyframes.scss',
      settings: {
        foreground: paletteColors.orange,
      },
    },
    {
      name: 'SASS yellow',
      scope: [
        'punctuation.definition.interpolation.begin.bracket.curly.scss',
        'punctuation.definition.interpolation.end.bracket.curly.scss',
      ].join(', '),
      settings: {
        foreground: paletteColors.yellow,
      },
    },
    {
      name: 'SASS green',
      scope: [
        'constant.character.css.sass',
        'meta.property-value.scss',
        'punctuation.definition.string.begin.scss',
        'punctuation.definition.string.end.scss',
        'string.quoted.double.scss',
        'string.quoted.single.scss',
      ].join(', '),
      settings: {
        foreground: paletteColors.green,
      },
    },
    {
      name: 'SASS purple',
      scope: [
        'keyword.control.at-rule.extend.scss',
        'keyword.control.at-rule.import.scss',
        'keyword.control.at-rule.include.scss',
        'keyword.control.at-rule.mixin.scss',
        'keyword.control.at-rule.use.scss',
      ].join(', '),
      settings: {
        foreground: paletteColors.purple,
      },
    },
    {
      name: 'Stylus white',
      scope: 'meta.function.stylus',
      settings: {
        foreground: paletteColors.fg,
      },
    },
    {
      name: 'Stylus yellow',
      scope: 'entity.name.function.stylus',
      settings: {
        foreground: paletteColors.yellow,
      },
    },
    {
      name: 'JavaScript white',
      scope: 'string.unquoted.js',
      settings: {
        foreground: paletteColors.fg,
      },
    },
    {
      name: 'JavaScript grey',
      scope: [
        'keyword.operator.accessor.js',
        'punctuation.accessor.js',
        'punctuation.separator.key-value.js',
        'punctuation.separator.label.js',
      ].join(', '),
      settings: {
        foreground: contrastColors.grey1,
      },
    },
    {
      name: 'JavaScript red',
      scope: 'punctuation.definition.block.tag.jsdoc',
      settings: {
        foreground: paletteColors.red,
      },
    },
    {
      name: 'JavaScript orange',
      scope: ['storage.type.function.arrow.js', 'storage.type.js'].join(', '),
      settings: {
        foreground: paletteColors.orange,
      },
    },
    {
      name: 'JSX white',
      scope: ['meta.jsx.children', 'text.html.jsx'].join(', '),
      settings: {
        foreground: paletteColors.fg,
      },
    },
    {
      name: 'JSX green',
      scope: [
        'entity.other.attribute-name.js.jsx',
        'entity.other.attribute-name.jsx',
        'punctuation.definition.tag.begin.js.jsx',
        'punctuation.definition.tag.end.js.jsx',
        'punctuation.definition.tag.jsx',
      ].join(', '),
      settings: {
        foreground: paletteColors.green,
      },
    },
    {
      name: 'TypeScript white',
      scope: 'entity.name.type.module.ts',
      settings: {
        foreground: paletteColors.fg,
      },
    },
    {
      name: 'TypeScript grey',
      scope: [
        'keyword.operator.type.annotation.ts',
        'punctuation.accessor.ts',
        'punctuation.separator.key-value.ts',
      ].join(', '),
      settings: {
        foreground: contrastColors.grey1,
      },
    },
    {
      name: 'TypeScript green',
      scope: [
        'entity.other.attribute-name.directive.ts',
        'punctuation.definition.tag.directive.ts',
      ].join(', '),
      settings: {
        foreground: paletteColors.green,
      },
    },
    {
      name: 'TypeScript aqua',
      scope: [
        'entity.name.type.alias.ts',
        'entity.name.type.class.ts',
        'entity.name.type.enum.ts',
        'entity.name.type.interface.ts',
        'entity.name.type.ts',
        'entity.other.inherited-class.ts',
      ].join(', '),
      settings: {
        foreground: paletteColors.aqua,
      },
    },
    {
      name: 'TypeScript orange',
      scope: [
        'storage.type.function.arrow.ts',
        'storage.type.ts',
        'storage.type.type.ts',
      ].join(', '),
      settings: {
        foreground: paletteColors.orange,
      },
    },
    {
      name: 'TypeScript blue',
      scope: 'entity.name.type.module.ts',
      settings: {
        foreground: paletteColors.blue,
      },
    },
    {
      name: 'TypeScript purple',
      scope: [
        'keyword.control.export.ts',
        'keyword.control.import.ts',
        'storage.type.namespace.ts',
      ].join(', '),
      settings: {
        foreground: paletteColors.purple,
      },
    },
    {
      name: 'TSX white',
      scope: 'entity.name.type.module.tsx',
      settings: {
        foreground: paletteColors.fg,
      },
    },
    {
      name: 'TSX grey',
      scope: [
        'keyword.operator.type.annotation.tsx',
        'punctuation.accessor.tsx',
        'punctuation.separator.key-value.tsx',
      ].join(', '),
      settings: {
        foreground: contrastColors.grey1,
      },
    },
    {
      name: 'TSX green',
      scope: [
        'entity.other.attribute-name.directive.tsx',
        'entity.other.attribute-name.tsx',
        'punctuation.definition.tag.begin.tsx',
        'punctuation.definition.tag.directive.tsx',
        'punctuation.definition.tag.end.tsx',
      ].join(', '),
      settings: {
        foreground: paletteColors.green,
      },
    },
    {
      name: 'TSX aqua',
      scope: [
        'entity.name.type.alias.tsx',
        'entity.name.type.class.tsx',
        'entity.name.type.enum.tsx',
        'entity.name.type.interface.tsx',
        'entity.name.type.tsx',
        'entity.other.inherited-class.tsx',
      ].join(', '),
      settings: {
        foreground: paletteColors.aqua,
      },
    },
    {
      name: 'TSX blue',
      scope: 'entity.name.type.module.tsx',
      settings: {
        foreground: paletteColors.blue,
      },
    },
    {
      name: 'TSX purple',
      scope: [
        'keyword.control.export.tsx',
        'keyword.control.import.tsx',
        'storage.type.namespace.tsx',
      ].join(', '),
      settings: {
        foreground: paletteColors.purple,
      },
    },
    {
      name: 'TSX orange',
      scope: [
        'storage.type.function.arrow.tsx',
        'storage.type.tsx',
        'storage.type.type.tsx',
        'support.class.component.tsx',
      ].join(', '),
      settings: {
        foreground: paletteColors.orange,
      },
    },
    {
      name: 'CoffeeScript orange',
      scope: 'storage.type.function.coffee',
      settings: {
        foreground: paletteColors.orange,
      },
    },
    {
      name: 'PureScript white',
      scope: 'meta.type-signature.purescript',
      settings: {
        foreground: paletteColors.fg,
      },
    },
    {
      name: 'PureScript orange',
      scope: [
        'keyword.other.arrow.purescript',
        'keyword.other.big-arrow.purescript',
        'keyword.other.double-colon.purescript',
      ].join(', '),
      settings: {
        foreground: paletteColors.orange,
      },
    },
    {
      name: 'PureScript yellow',
      scope: 'entity.name.function.purescript',
      settings: {
        foreground: paletteColors.yellow,
      },
    },
    {
      name: 'PureScript green',
      scope: [
        'entity.name.type.purescript',
        'punctuation.definition.string.begin.purescript',
        'punctuation.definition.string.end.purescript',
        'string.quoted.double.purescript',
        'string.quoted.single.purescript',
        'string.quoted.triple.purescript',
      ].join(', '),
      settings: {
        foreground: paletteColors.green,
      },
    },
    {
      name: 'PureScript purple',
      scope: 'support.other.module.purescript',
      settings: {
        foreground: paletteColors.purple,
      },
    },
    {
      name: 'Dart grey',
      scope: 'punctuation.dot.dart',
      settings: {
        foreground: contrastColors.grey1,
      },
    },
    {
      name: 'Dart orange',
      scope: 'storage.type.primitive.dart',
      settings: {
        foreground: paletteColors.orange,
      },
    },
    {
      name: 'Dart yellow',
      scope: 'support.class.dart',
      settings: {
        foreground: paletteColors.yellow,
      },
    },
    {
      name: 'Dart green',
      scope: [
        'entity.name.function.dart',
        'string.interpolated.double.dart',
        'string.interpolated.single.dart',
      ].join(', '),
      settings: {
        foreground: paletteColors.green,
      },
    },
    {
      name: 'Dart blue',
      scope: 'variable.language.dart',
      settings: {
        foreground: paletteColors.blue,
      },
    },
    {
      name: 'Dart purple',
      scope: ['keyword.other.import.dart', 'storage.type.annotation.dart'].join(
        ', ',
      ),
      settings: {
        foreground: paletteColors.purple,
      },
    },
    {
      name: 'Pug red',
      scope: 'entity.other.attribute-name.class.pug',
      settings: {
        foreground: paletteColors.red,
      },
    },
    {
      name: 'Pug orange',
      scope: 'storage.type.function.pug',
      settings: {
        foreground: paletteColors.orange,
      },
    },
    {
      name: 'Pug aqua',
      scope: 'entity.other.attribute-name.tag.pug',
      settings: {
        foreground: paletteColors.aqua,
      },
    },
    {
      name: 'Pug purple',
      scope: ['entity.name.tag.pug', 'storage.type.import.include.pug'].join(
        ', ',
      ),
      settings: {
        foreground: paletteColors.purple,
      },
    },
    {
      name: 'C white',
      scope: [
        'meta.function-call.c',
        'meta.function.definition.parameters.c',
        'storage.modifier.array.bracket.square.c',
      ].join(', '),
      settings: {
        foreground: paletteColors.fg,
      },
    },
    {
      name: 'C grey',
      scope: [
        'constant.character.escape.line-continuation.c',
        'punctuation.separator.dot-access.c',
      ].join(', '),
      settings: {
        foreground: contrastColors.grey1,
      },
    },
    {
      name: 'C red',
      scope: [
        'keyword.control.directive.conditional.c',
        'keyword.control.directive.conditional.if.c',
        'keyword.control.directive.conditional.ifdef.c',
        'keyword.control.directive.conditional.ifndef.c',
        'keyword.control.directive.define.c',
        'keyword.control.directive.diagnostic.error.c',
        'keyword.control.directive.else.c',
        'keyword.control.directive.endif.c',
        'keyword.control.directive.include.c',
        'keyword.control.directive.line.c',
        'keyword.control.directive.pragma.c',
        'keyword.control.directive.undef.c',
        'punctuation.definition.directive.c',
      ].join(', '),
      settings: {
        foreground: paletteColors.red,
      },
    },
    {
      name: 'C orange',
      scope: 'punctuation.separator.pointer-access.c',
      settings: {
        foreground: paletteColors.orange,
      },
    },
    {
      name: 'C aqua',
      scope: 'variable.other.member.c',
      settings: {
        foreground: paletteColors.aqua,
      },
    },
    {
      name: 'C++ white',
      scope: [
        'meta.body.function.definition.cpp',
        'meta.function-call.cpp',
        'meta.function.definition.parameters.cpp',
        'storage.modifier.array.bracket.square.cpp',
      ].join(', '),
      settings: {
        foreground: paletteColors.fg1,
      },
    },
    {
      name: 'C++ grey',
      scope: [
        'constant.character.escape.line-continuation.cpp',
        'punctuation.separator.dot-access.cpp',
      ].join(', '),
      settings: {
        foreground: contrastColors.grey1,
      },
    },
    {
      name: 'C++ red',
      scope: [
        'keyword.control.directive.conditional.cpp',
        'keyword.control.directive.conditional.if.cpp',
        'keyword.control.directive.conditional.ifdef.cpp',
        'keyword.control.directive.conditional.ifndef.cpp',
        'keyword.control.directive.define.cpp',
        'keyword.control.directive.diagnostic.error.cpp',
        'keyword.control.directive.else.cpp',
        'keyword.control.directive.endif.cpp',
        'keyword.control.directive.include.cpp',
        'keyword.control.directive.line.cpp',
        'keyword.control.directive.pragma.cpp',
        'keyword.control.directive.undef.cpp',
        'keyword.other.using.directive.cpp',
        'punctuation.definition.directive.cpp',
        'storage.type.namespace.definition.cpp',
        'storage.type.struct.cpp',
      ].join(', '),
      settings: {
        foreground: paletteColors.red,
      },
    },
    {
      name: 'C++ orange',
      scope: [
        'punctuation.section.angle-brackets.begin.template.call.cpp',
        'punctuation.section.angle-brackets.end.template.call.cpp',
        'punctuation.separator.pointer-access.cpp',
      ].join(', '),
      settings: {
        foreground: paletteColors.orange,
      },
    },
    {
      name: 'C++ aqua',
      scope: 'variable.other.member.cpp',
      settings: {
        foreground: paletteColors.aqua,
      },
    },
    {
      name: 'C# red',
      scope: 'keyword.other.using.cs',
      settings: {
        foreground: paletteColors.red,
      },
    },
    {
      name: 'C# yellow',
      scope: [
        'constant.character.escape.cs',
        'keyword.type.cs',
        'punctuation.definition.interpolation.begin.cs',
        'punctuation.definition.interpolation.end.cs',
      ].join(', '),
      settings: {
        foreground: paletteColors.yellow,
      },
    },
    {
      name: 'C# green',
      scope: [
        'punctuation.definition.string.begin.cs',
        'punctuation.definition.string.end.cs',
        'string.quoted.double.cs',
        'string.quoted.single.cs',
      ].join(', '),
      settings: {
        foreground: paletteColors.green,
      },
    },
    {
      name: 'C# aqua',
      scope: 'variable.other.object.property.cs',
      settings: {
        foreground: paletteColors.aqua,
      },
    },
    {
      name: 'C# purple',
      scope: 'entity.name.type.namespace.cs',
      settings: {
        foreground: paletteColors.purple,
      },
    },
    {
      name: 'F# white',
      scope: ['constant.language.unit.fsharp', 'keyword.symbol.fsharp'].join(
        ', ',
      ),
      settings: {
        foreground: paletteColors.fg,
      },
    },
    {
      name: 'F# yellow',
      scope: [
        'entity.name.type.fsharp',
        'keyword.format.specifier.fsharp',
      ].join(', '),
      settings: {
        foreground: paletteColors.yellow,
      },
    },
    {
      name: 'F# green',
      scope: [
        'punctuation.definition.string.begin.fsharp',
        'punctuation.definition.string.end.fsharp',
        'string.quoted.double.fsharp',
        'string.quoted.single.fsharp',
      ].join(', '),
      settings: {
        foreground: paletteColors.green,
      },
    },
    {
      name: 'F# blue',
      scope: 'entity.name.section.fsharp',
      settings: {
        foreground: paletteColors.blue,
      },
    },
    {
      name: 'F# purple',
      scope: 'support.function.attribute.fsharp',
      settings: {
        foreground: paletteColors.purple,
      },
    },
    {
      name: 'Java grey',
      scope: [
        'punctuation.separator.java',
        'punctuation.separator.period.java',
      ].join(', '),
      settings: {
        foreground: contrastColors.grey1,
      },
    },
    {
      name: 'Java red',
      scope: ['keyword.other.import.java', 'keyword.other.package.java'].join(
        ', ',
      ),
      settings: {
        foreground: paletteColors.red,
      },
    },
    {
      name: 'Java orange',
      scope: [
        'keyword.control.ternary.java',
        'storage.type.function.arrow.java',
      ].join(', '),
      settings: {
        foreground: paletteColors.orange,
      },
    },
    {
      name: 'Java aqua',
      scope: 'variable.other.property.java',
      settings: {
        foreground: paletteColors.aqua,
      },
    },
    {
      name: 'Java purple',
      scope: [
        'entity.name.type.module.java',
        'punctuation.definition.annotation.java',
        'storage.modifier.import.java',
        'storage.modifier.package.java',
        'storage.type.annotation.java',
        'variable.language.wildcard.java',
      ].join(', '),
      settings: {
        foreground: paletteColors.purple,
      },
    },
    {
      name: 'Kotlin red',
      scope: 'keyword.other.import.kotlin',
      settings: {
        foreground: paletteColors.red,
      },
    },
    {
      name: 'Kotlin orange',
      scope: 'storage.type.kotlin',
      settings: {
        foreground: paletteColors.orange,
      },
    },
    {
      name: 'Kotlin aqua',
      scope: 'constant.language.kotlin',
      settings: {
        foreground: paletteColors.aqua,
      },
    },
    {
      name: 'Kotlin purple',
      scope: [
        'entity.name.package.kotlin',
        'storage.type.annotation.kotlin',
      ].join(', '),
      settings: {
        foreground: paletteColors.purple,
      },
    },
    {
      name: 'Scala purple',
      scope: 'entity.name.package.scala',
      settings: {
        foreground: paletteColors.purple,
      },
    },
    {
      name: 'Scala blue',
      scope: 'constant.language.scala',
      settings: {
        foreground: paletteColors.blue,
      },
    },
    {
      name: 'Scala aqua',
      scope: 'entity.name.import.scala',
      settings: {
        foreground: paletteColors.aqua,
      },
    },
    {
      name: 'Scala green',
      scope: [
        'punctuation.definition.string.begin.scala',
        'punctuation.definition.string.end.scala',
        'string.quoted.double.interpolated.scala',
        'string.quoted.double.scala',
        'string.quoted.single.interpolated.scala',
        'string.quoted.single.scala',
        'string.quoted.triple.scala',
      ].join(', '),
      settings: {
        foreground: paletteColors.green,
      },
    },
    {
      name: 'Scala yellow',
      scope: ['entity.name.class', 'entity.other.inherited-class.scala'].join(
        ', ',
      ),
      settings: {
        foreground: paletteColors.yellow,
      },
    },
    {
      name: 'Scala orange',
      scope: [
        'keyword.declaration.stable.scala',
        'keyword.other.arrow.scala',
      ].join(', '),
      settings: {
        foreground: paletteColors.orange,
      },
    },
    {
      name: 'Scala red',
      scope: 'keyword.other.import.scala',
      settings: {
        foreground: paletteColors.red,
      },
    },
    {
      name: 'Groovy white',
      scope: [
        'keyword.operator.navigation.groovy',
        'meta.definition.method.groovy',
        'meta.definition.method.signature.java',
        'meta.method.body.java',
      ].join(', '),
      settings: {
        foreground: paletteColors.fg,
      },
    },
    {
      name: 'Scala grey',
      scope: 'punctuation.separator.groovy',
      settings: {
        foreground: contrastColors.grey1,
      },
    },
    {
      name: 'Scala red',
      scope: [
        'keyword.other.import.groovy',
        'keyword.other.import.static.groovy',
        'keyword.other.package.groovy',
      ].join(', '),
      settings: {
        foreground: paletteColors.red,
      },
    },
    {
      name: 'Groovy orange',
      scope: 'storage.type.def.groovy',
      settings: {
        foreground: paletteColors.orange,
      },
    },
    {
      name: 'Groovy green',
      scope: ['meta.method.groovy', 'variable.other.interpolated.groovy'].join(
        ', ',
      ),
      settings: {
        foreground: paletteColors.green,
      },
    },
    {
      name: 'Groovy aqua',
      scope: [
        'storage.modifier.import.groovy',
        'storage.modifier.package.groovy',
      ].join(', '),
      settings: {
        foreground: paletteColors.aqua,
      },
    },
    {
      name: 'Groovy purple',
      scope: 'storage.type.annotation.groovy',
      settings: {
        foreground: paletteColors.purple,
      },
    },
    {
      name: 'Go red',
      scope: 'keyword.type.go',
      settings: {
        foreground: paletteColors.red,
      },
    },
    {
      name: 'Go aqua',
      scope: 'entity.name.package.go',
      settings: {
        foreground: paletteColors.aqua,
      },
    },
    {
      name: 'Go purple',
      scope: ['keyword.import.go', 'keyword.package.go'].join(', '),
      settings: {
        foreground: paletteColors.purple,
      },
    },
    {
      name: 'Rust white',
      scope: 'entity.name.type.mod.rust',
      settings: {
        foreground: paletteColors.fg,
      },
    },
    {
      name: 'Rust grey',
      scope: [
        'keyword.operator.member-access.rust',
        'keyword.operator.path.rust',
      ].join(', '),
      settings: {
        foreground: contrastColors.grey1,
      },
    },
    {
      name: 'Rust orange',
      scope: 'storage.type.rust',
      settings: {
        foreground: paletteColors.orange,
      },
    },
    {
      name: 'Rust aqua',
      scope: 'support.constant.core.rust',
      settings: {
        foreground: paletteColors.aqua,
      },
    },
    {
      name: 'Rust purple',
      scope: [
        'meta.attribute.rust',
        'storage.type.module.rust',
        'variable.language.rust',
      ].join(', '),
      settings: {
        foreground: paletteColors.purple,
      },
    },
    {
      name: 'Swift white',
      scope: [
        'meta.function-call.swift',
        'support.function.any-method.swift',
      ].join(', '),
      settings: {
        foreground: paletteColors.fg,
      },
    },
    {
      name: 'Swift aqua',
      scope: 'support.variable.swift',
      settings: {
        foreground: paletteColors.aqua,
      },
    },
    {
      name: 'PHP white',
      scope: 'keyword.operator.class.php',
      settings: {
        foreground: paletteColors.fg,
      },
    },
    {
      name: 'PHP orange',
      scope: 'storage.type.trait.php',
      settings: {
        foreground: paletteColors.orange,
      },
    },
    {
      name: 'PHP aqua',
      scope: ['constant.language.php', 'support.other.namespace.php'].join(
        ', ',
      ),
      settings: {
        foreground: paletteColors.aqua,
      },
    },
    {
      name: 'PHP blue',
      scope: [
        'storage.type.modifier.access.control.private.cpp',
        'storage.type.modifier.access.control.public.cpp',
      ].join(', '),
      settings: {
        foreground: paletteColors.blue,
      },
    },
    {
      name: 'PHP purple',
      scope: ['keyword.control.import.include.php', 'storage.type.php'].join(
        ', ',
      ),
      settings: {
        foreground: paletteColors.purple,
      },
    },
    {
      name: 'Python white',
      scope: 'meta.function-call.arguments.python',
      settings: {
        foreground: paletteColors.fg,
      },
    },
    {
      name: 'Python grey',
      scope: [
        'punctuation.definition.decorator.python',
        'punctuation.separator.period.python',
      ].join(', '),
      settings: {
        foreground: contrastColors.grey1,
      },
    },
    {
      name: 'Python aqua',
      scope: 'constant.language.python',
      settings: {
        foreground: paletteColors.aqua,
      },
    },
    {
      name: 'Python purple',
      scope: [
        'keyword.control.import.from.python',
        'keyword.control.import.python',
        'variable.parameter.function.language.special.self',
      ].join(', '),
      settings: {
        foreground: paletteColors.purple,
      },
    },
    {
      name: 'Lua aqua',
      scope: 'constant.language.lua',
      settings: {
        foreground: paletteColors.aqua,
      },
    },
    {
      name: 'Lua blue',
      scope: 'entity.name.class.lua',
      settings: {
        foreground: paletteColors.blue,
      },
    },
    {
      name: 'Ruby white',
      scope: 'meta.function.method.with-arguments.ruby',
      settings: {
        foreground: paletteColors.fg,
      },
    },
    {
      name: 'Ruby grey',
      scope: 'punctuation.separator.method.ruby',
      settings: {
        foreground: contrastColors.grey1,
      },
    },
    {
      name: 'Ruby orange',
      scope: [
        'keyword.control.pseudo-method.ruby',
        'storage.type.variable.ruby',
      ].join(', '),
      settings: {
        foreground: paletteColors.orange,
      },
    },
    {
      name: 'Ruby green',
      scope: 'keyword.other.special-method.ruby',
      settings: {
        foreground: paletteColors.green,
      },
    },
    {
      name: 'Ruby purple',
      scope: [
        'keyword.control.module.ruby',
        'punctuation.definition.constant.ruby',
      ].join(', '),
      settings: {
        foreground: paletteColors.purple,
      },
    },
    {
      name: 'Ruby yellow',
      scope: [
        'punctuation.definition.character-class.ruby',
        'punctuation.definition.group.ruby',
        'punctuation.section.regexp.ruby',
        'string.regexp.character-class.ruby',
        'string.regexp.group.ruby',
        'string.regexp.interpolated.ruby',
      ].join(', '),
      settings: {
        foreground: paletteColors.yellow,
      },
    },
    {
      name: 'Ruby blue',
      scope: 'variable.other.constant.ruby',
      settings: {
        foreground: paletteColors.blue,
      },
    },
    {
      name: 'Haskell orange',
      scope: [
        'keyword.other.arrow.haskell',
        'keyword.other.big-arrow.haskell',
        'keyword.other.double-colon.haskell',
      ].join(', '),
      settings: {
        foreground: paletteColors.orange,
      },
    },
    {
      name: 'Haskell yellow',
      scope: 'storage.type.haskell',
      settings: {
        foreground: paletteColors.yellow,
      },
    },
    {
      name: 'Haskell green',
      scope: [
        'constant.other.haskell',
        'punctuation.definition.string.begin.haskell',
        'punctuation.definition.string.end.haskell',
        'string.quoted.double.haskell',
        'string.quoted.single.haskell',
      ].join(', '),
      settings: {
        foreground: paletteColors.green,
      },
    },
    {
      name: 'Haskell blue',
      scope: 'entity.name.function.haskell',
      settings: {
        foreground: paletteColors.blue,
      },
    },
    {
      name: 'Haskell aqua',
      scope: ['entity.name.namespace', 'meta.preprocessor.haskell'].join(', '),
      settings: {
        foreground: paletteColors.aqua,
      },
    },
    {
      name: 'Julia red',
      scope: [
        'keyword.control.export.julia',
        'keyword.control.import.julia',
      ].join(', '),
      settings: {
        foreground: paletteColors.red,
      },
    },
    {
      name: 'Julia orange',
      scope: 'keyword.storage.modifier.julia',
      settings: {
        foreground: paletteColors.orange,
      },
    },
    {
      name: 'Julia aqua',
      scope: 'constant.language.julia',
      settings: {
        foreground: paletteColors.aqua,
      },
    },
    {
      name: 'Julia purple',
      scope: 'support.function.macro.julia',
      settings: {
        foreground: paletteColors.purple,
      },
    },
    {
      name: 'Elm white',
      scope: 'keyword.other.period.elm',
      settings: {
        foreground: paletteColors.fg,
      },
    },
    {
      name: 'Elm yellow',
      scope: 'storage.type.elm',
      settings: {
        foreground: paletteColors.yellow,
      },
    },
    {
      name: 'R orange',
      scope: 'keyword.other.r',
      settings: {
        foreground: paletteColors.orange,
      },
    },
    {
      name: 'R green',
      scope: ['entity.name.function.r', 'variable.function.r'].join(', '),
      settings: {
        foreground: paletteColors.green,
      },
    },
    {
      name: 'R aqua',
      scope: 'constant.language.r',
      settings: {
        foreground: paletteColors.aqua,
      },
    },
    {
      name: 'R purple',
      scope: 'entity.namespace.r',
      settings: {
        foreground: paletteColors.purple,
      },
    },
    {
      name: 'Erlang grey',
      scope: [
        'punctuation.section.directive.begin.erlang',
        'punctuation.separator.module-function.erlang',
      ].join(', '),
      settings: {
        foreground: contrastColors.grey1,
      },
    },
    {
      name: 'Erlang red',
      scope: [
        'keyword.control.directive.define.erlang',
        'keyword.control.directive.erlang',
      ].join(', '),
      settings: {
        foreground: paletteColors.red,
      },
    },
    {
      name: 'Erlang yellow',
      scope: 'entity.name.type.class.module.erlang',
      settings: {
        foreground: paletteColors.yellow,
      },
    },
    {
      name: 'Erlang green',
      scope: [
        'punctuation.definition.string.begin.erlang',
        'punctuation.definition.string.end.erlang',
        'string.quoted.double.erlang',
        'string.quoted.single.erlang',
      ].join(', '),
      settings: {
        foreground: paletteColors.green,
      },
    },
    {
      name: 'Erlang purple',
      scope: [
        'keyword.control.directive.behaviour.erlang',
        'keyword.control.directive.export.erlang',
        'keyword.control.directive.import.erlang',
        'keyword.control.directive.module.erlang',
      ].join(', '),
      settings: {
        foreground: paletteColors.purple,
      },
    },
    {
      name: 'Elixir aqua',
      scope: [
        'punctuation.definition.variable.elixir',
        'variable.other.readwrite.module.elixir',
      ].join(', '),
      settings: {
        foreground: paletteColors.aqua,
      },
    },
    {
      name: 'Elixir blue',
      scope: 'constant.language.elixir',
      settings: {
        foreground: paletteColors.blue,
      },
    },
    {
      name: 'Elixir purple',
      scope: 'keyword.control.module.elixir',
      settings: {
        foreground: paletteColors.purple,
      },
    },
    {
      name: 'OCaml white',
      scope: 'entity.name.type.value-signature.ocaml',
      settings: {
        foreground: paletteColors.fg,
      },
    },
    {
      name: 'OCaml orange',
      scope: 'keyword.other.ocaml',
      settings: {
        foreground: paletteColors.orange,
      },
    },
    {
      name: 'OCaml aqua',
      scope: 'constant.language.variant.ocaml',
      settings: {
        foreground: paletteColors.aqua,
      },
    },
    {
      name: 'Perl red',
      scope: [
        'storage.type.declare.routine.perl',
        'storage.type.sub.perl',
      ].join(', '),
      settings: {
        foreground: paletteColors.red,
      },
    },
    {
      name: 'Lisp white',
      scope: 'meta.function.lisp',
      settings: {
        foreground: paletteColors.fg,
      },
    },
    {
      name: 'Lisp red',
      scope: 'storage.type.function-type.lisp',
      settings: {
        foreground: paletteColors.red,
      },
    },
    {
      name: 'Lisp green',
      scope: 'keyword.constant.lisp',
      settings: {
        foreground: paletteColors.green,
      },
    },
    {
      name: 'Lisp aqua',
      scope: 'entity.name.function.lisp',
      settings: {
        foreground: paletteColors.aqua,
      },
    },
    {
      name: 'Clojure green',
      scope: [
        'constant.keyword.clojure',
        'meta.definition.variable.clojure',
        'support.variable.clojure',
      ].join(', '),
      settings: {
        foreground: paletteColors.green,
      },
    },
    {
      name: 'Clojure purple',
      scope: 'entity.global.clojure',
      settings: {
        foreground: paletteColors.purple,
      },
    },
    {
      name: 'Clojure blue',
      scope: 'entity.name.function.clojure',
      settings: {
        foreground: paletteColors.blue,
      },
    },
    {
      name: 'Shell white',
      scope: ['meta.scope.group.shell', 'meta.scope.if-block.shell'].join(', '),
      settings: {
        foreground: paletteColors.fg,
      },
    },
    {
      name: 'Shell yellow',
      scope: [
        'entity.name.function.shell',
        'support.function.builtin.shell',
      ].join(', '),
      settings: {
        foreground: paletteColors.yellow,
      },
    },
    {
      name: 'Shell green',
      scope: [
        'punctuation.definition.string.begin.shell',
        'punctuation.definition.string.end.shell',
        'string.quoted.double.shell',
        'string.quoted.single.shell',
        'string.unquoted.heredoc.shell',
      ].join(', '),
      settings: {
        foreground: paletteColors.green,
      },
    },
    {
      name: 'Shell purple',
      scope: [
        'keyword.control.heredoc-token.shell',
        'punctuation.definition.variable.shell',
        'variable.other.bracket.shell',
        'variable.other.normal.shell',
        'variable.other.positional.shell',
        'variable.other.special.shell',
      ].join(', '),
      settings: {
        foreground: paletteColors.purple,
      },
    },
    {
      name: 'Fish red',
      scope: 'support.function.builtin.fish',
      settings: {
        foreground: paletteColors.red,
      },
    },
    {
      name: 'Fish orange',
      scope: 'support.function.unix.fish',
      settings: {
        foreground: paletteColors.orange,
      },
    },
    {
      name: 'Fish blue',
      scope: [
        'punctuation.definition.variable.fish',
        'variable.other.fixed.fish',
        'variable.other.normal.fish',
        'variable.other.special.fish',
      ].join(', '),
      settings: {
        foreground: paletteColors.blue,
      },
    },
    {
      name: 'Fish green',
      scope: [
        'punctuation.definition.string.begin.fish',
        'punctuation.definition.string.end.fish',
        'string.quoted.double.fish',
        'string.quoted.single.fish',
      ].join(', '),
      settings: {
        foreground: paletteColors.green,
      },
    },
    {
      name: 'Fish purple',
      scope: 'constant.character.escape.single.fish',
      settings: {
        foreground: paletteColors.purple,
      },
    },
    {
      name: 'PowerShell grey',
      scope: 'punctuation.definition.variable.powershell',
      settings: {
        foreground: contrastColors.grey1,
      },
    },
    {
      name: 'PowerShell yellow',
      scope: [
        'entity.name.function.powershell',
        'support.function.attribute.powershell',
        'support.function.powershell',
      ].join(','),
      settings: {
        foreground: paletteColors.yellow,
      },
    },
    {
      name: 'PowerShell green',
      scope: [
        'punctuation.definition.string.begin.powershell',
        'punctuation.definition.string.end.powershell',
        'string.quoted.double.heredoc.powershell',
        'string.quoted.double.powershell',
        'string.quoted.single.powershell',
      ].join(', '),
      settings: {
        foreground: paletteColors.green,
      },
    },
    {
      name: 'PowerShell aqua',
      scope: 'variable.other.member.powershell',
      settings: {
        foreground: paletteColors.aqua,
      },
    },
    {
      name: 'GraphQL white',
      scope: 'string.unquoted.alias.graphql',
      settings: {
        foreground: paletteColors.fg,
      },
    },
    {
      name: 'GraphQL red',
      scope: 'keyword.type.graphql',
      settings: {
        foreground: paletteColors.red,
      },
    },
    {
      name: 'GraphQL purple',
      scope: 'entity.name.fragment.graphql',
      settings: {
        foreground: paletteColors.purple,
      },
    },
    {
      name: 'Makefile orange',
      scope: 'entity.name.function.target.makefile',
      settings: {
        foreground: paletteColors.orange,
      },
    },
    {
      name: 'Makefile yellow',
      scope: 'variable.other.makefile',
      settings: {
        foreground: paletteColors.yellow,
      },
    },
    {
      name: 'Makefile green',
      scope: 'meta.scope.prerequisites.makefile',
      settings: {
        foreground: paletteColors.green,
      },
    },
    {
      name: 'CMake green',
      scope: 'string.source.cmake',
      settings: {
        foreground: paletteColors.green,
      },
    },
    {
      name: 'CMake aqua',
      scope: 'entity.source.cmake',
      settings: {
        foreground: paletteColors.aqua,
      },
    },
    {
      name: 'CMake purple',
      scope: 'storage.source.cmake',
      settings: {
        foreground: paletteColors.purple,
      },
    },
    {
      name: 'VimL grey',
      scope: 'punctuation.definition.map.viml',
      settings: {
        foreground: contrastColors.grey1,
      },
    },
    {
      name: 'VimL orange',
      scope: 'storage.type.map.viml',
      settings: {
        foreground: paletteColors.orange,
      },
    },
    {
      name: 'VimL green',
      scope: [
        'constant.character.map.key.viml',
        'constant.character.map.viml',
      ].join(', '),
      settings: {
        foreground: paletteColors.green,
      },
    },
    {
      name: 'VimL blue',
      scope: 'constant.character.map.special.viml',
      settings: {
        foreground: paletteColors.blue,
      },
    },
    {
      name: 'Tmux green',
      scope: ['constant.language.tmux', 'constant.numeric.tmux'].join(', '),
      settings: {
        foreground: paletteColors.green,
      },
    },
    {
      name: 'Dockerfile orange',
      scope: 'entity.name.function.package-manager.dockerfile',
      settings: {
        foreground: paletteColors.orange,
      },
    },
    {
      name: 'Dockerfile yellow',
      scope: 'keyword.operator.flag.dockerfile',
      settings: {
        foreground: paletteColors.yellow,
      },
    },
    {
      name: 'Dockerfile green',
      scope: [
        'string.quoted.double.dockerfile',
        'string.quoted.single.dockerfile',
      ].join(', '),
      settings: {
        foreground: paletteColors.green,
      },
    },
    {
      name: 'Dockerfile aqua',
      scope: 'constant.character.escape.dockerfile',
      settings: {
        foreground: paletteColors.aqua,
      },
    },
    {
      name: 'Dockerfile purple',
      scope: [
        'entity.name.image.dockerfile',
        'entity.name.type.base-image.dockerfile',
      ].join(', '),
      settings: {
        foreground: paletteColors.purple,
      },
    },
    {
      name: 'Diff grey',
      scope: 'punctuation.definition.separator.diff',
      settings: {
        foreground: contrastColors.grey1,
      },
    },
    {
      name: 'Diff red',
      scope: [
        'markup.deleted.diff',
        'punctuation.definition.deleted.diff',
      ].join(', '),
      settings: {
        foreground: paletteColors.red,
      },
    },
    {
      name: 'Diff orange',
      scope: [
        'meta.diff.range.context',
        'punctuation.definition.range.diff',
      ].join(', '),
      settings: {
        foreground: paletteColors.orange,
      },
    },
    {
      name: 'Diff yellow',
      scope: 'meta.diff.header.from-file',
      settings: {
        foreground: paletteColors.yellow,
      },
    },
    {
      name: 'Diff green',
      scope: [
        'markup.inserted.diff',
        'punctuation.definition.inserted.diff',
      ].join(', '),
      settings: {
        foreground: paletteColors.green,
      },
    },
    {
      name: 'Diff blue',
      scope: [
        'markup.changed.diff',
        'punctuation.definition.changed.diff',
      ].join(', '),
      settings: {
        foreground: paletteColors.blue,
      },
    },
    {
      name: 'Diff purple',
      scope: 'punctuation.definition.from-file.diff',
      settings: {
        foreground: paletteColors.purple,
      },
    },
    {
      name: 'Git red',
      scope: [
        'entity.name.section.group-title.ini',
        'punctuation.definition.entity.ini',
      ].join(', '),
      settings: {
        foreground: paletteColors.red,
      },
    },
    {
      name: 'Git orange',
      scope: 'punctuation.separator.key-value.ini',
      settings: {
        foreground: paletteColors.orange,
      },
    },
    {
      name: 'Git green',
      scope: [
        'punctuation.definition.string.begin.ini',
        'punctuation.definition.string.end.ini',
        'string.quoted.double.ini',
        'string.quoted.single.ini',
      ].join(', '),
      settings: {
        foreground: paletteColors.green,
      },
    },
    {
      name: 'Git aqua',
      scope: 'keyword.other.definition.ini',
      settings: {
        foreground: paletteColors.aqua,
      },
    },
    {
      name: 'SQL yellow',
      scope: 'support.function.aggregate.sql',
      settings: {
        foreground: paletteColors.yellow,
      },
    },
    {
      name: 'SQL green',
      scope: [
        'punctuation.definition.string.begin.sql',
        'punctuation.definition.string.end.sql',
        'string.quoted.double.sql',
        'string.quoted.single.sql',
      ].join(', '),
      settings: {
        foreground: paletteColors.green,
      },
    },
    {
      name: 'GraphQL yellow',
      scope: 'support.type.graphql',
      settings: {
        foreground: paletteColors.yellow,
      },
    },
    {
      name: 'GraphQL blue',
      scope: 'variable.parameter.graphql',
      settings: {
        foreground: paletteColors.blue,
      },
    },
    {
      name: 'GraphQL aqua',
      scope: 'constant.character.enum.graphql',
      settings: {
        foreground: paletteColors.aqua,
      },
    },
    {
      name: 'JSON grey',
      scope: [
        'punctuation.definition.string.begin.json',
        'punctuation.definition.string.end.json',
        'punctuation.separator.array.json',
        'punctuation.separator.dictionary.key-value.json',
        'punctuation.separator.dictionary.pair.json',
        'punctuation.support.type.property-name.begin.json',
        'punctuation.support.type.property-name.end.json',
      ].join(', '),
      settings: {
        foreground: contrastColors.grey1,
      },
    },
    {
      name: 'JSON orange',
      scope: 'support.type.property-name.json',
      settings: {
        foreground: paletteColors.orange,
      },
    },
    {
      name: 'JSON green',
      scope: 'string.quoted.double.json',
      settings: {
        foreground: paletteColors.green,
      },
    },
    {
      name: 'YAML grey',
      scope: 'punctuation.separator.key-value.mapping.yaml',
      settings: {
        foreground: contrastColors.grey1,
      },
    },
    {
      name: 'YAML green',
      scope: [
        'punctuation.definition.string.begin.yaml',
        'punctuation.definition.string.end.yaml',
        'string.quoted.double.yaml',
        'string.quoted.single.yaml',
        'string.unquoted.block.yaml',
        'string.unquoted.plain.in.yaml',
        'string.unquoted.plain.out.yaml',
      ].join(', '),
      settings: {
        foreground: paletteColors.green,
      },
    },
    {
      name: 'YAML aqua',
      scope: [
        'punctuation.definition.anchor.yaml',
        'punctuation.definition.block.sequence.item.yaml',
      ].join(', '),
      settings: {
        foreground: paletteColors.aqua,
      },
    },
    {
      name: 'TOML orange',
      scope: 'keyword.key.toml',
      settings: {
        foreground: paletteColors.orange,
      },
    },
    {
      name: 'TOML green',
      scope: [
        'punctuation.definition.keyValuePair.toml',
        'string.quoted.single.basic.line.toml',
        'string.quoted.single.literal.line.toml',
      ].join(', '),
      settings: {
        foreground: paletteColors.green,
      },
    },
    {
      name: 'TOML blue',
      scope: 'constant.other.boolean.toml',
      settings: {
        foreground: paletteColors.blue,
      },
    },
    {
      name: 'TOML purple',
      scope: [
        'entity.other.attribute-name.table.array.toml',
        'entity.other.attribute-name.table.toml',
        'punctuation.definition.table.array.toml',
        'punctuation.definition.table.toml',
      ].join(', '),
      settings: {
        foreground: paletteColors.purple,
      },
    },
    {
      name: 'Comment',
      scope: [
        'comment',
        'punctuation.definition.comment',
        'string.comment',
      ].join(', '),
      settings: {
        foreground: contrastColors.grey1,
        fontStyle: 'italic',
      },
    },
  ];
}
