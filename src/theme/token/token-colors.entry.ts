import { type ColorsPayload, type TokenColor } from "../theme.types";

export function createTokenColors(colors: ColorsPayload): TokenColor[] {
  return [
    {
      name: "Annotation",
      scope: "storage.type.annotation",
      settings: {
        foreground: colors.palette.aqua,
      },
    },
    {
      name: "Attribute",
      scope: "entity.other.attribute-name",
      settings: {
        foreground: colors.palette.yellow,
      },
    },
    {
      name: "Boolean",
      scope: "constant.language.boolean",
      settings: {
        foreground: colors.palette.purple,
      },
    },
    {
      name: "C Aqua",
      scope: "variable.other.member.c",
      settings: {
        foreground: colors.palette.aqua,
      },
    },
    {
      name: "C Grey",
      scope: [
        "constant.character.escape.line-continuation.c",
        "punctuation.separator.dot-access.c",
      ],
      settings: {
        foreground: colors.contrast.grey1,
      },
    },
    {
      name: "C Orange",
      scope: "punctuation.separator.pointer-access.c",
      settings: {
        foreground: colors.palette.orange,
      },
    },
    {
      name: "C Red",
      scope: [
        "keyword.control.directive.conditional.c",
        "keyword.control.directive.conditional.if.c",
        "keyword.control.directive.conditional.ifdef.c",
        "keyword.control.directive.conditional.ifndef.c",
        "keyword.control.directive.define.c",
        "keyword.control.directive.diagnostic.error.c",
        "keyword.control.directive.else.c",
        "keyword.control.directive.endif.c",
        "keyword.control.directive.include.c",
        "keyword.control.directive.line.c",
        "keyword.control.directive.pragma.c",
        "keyword.control.directive.undef.c",
        "punctuation.definition.directive.c",
      ],
      settings: {
        foreground: colors.palette.red,
      },
    },
    {
      name: "C White",
      scope: [
        "meta.function-call.c",
        "meta.function.definition.parameters.c",
        "storage.modifier.array.bracket.square.c",
      ],
      settings: {
        foreground: colors.palette.fg,
      },
    },
    {
      name: "C# Aqua",
      scope: "variable.other.object.property.cs",
      settings: {
        foreground: colors.palette.aqua,
      },
    },
    {
      name: "C# Green",
      scope: [
        "punctuation.definition.string.begin.cs",
        "punctuation.definition.string.end.cs",
        "string.quoted.double.cs",
        "string.quoted.single.cs",
      ],
      settings: {
        foreground: colors.palette.green,
      },
    },
    {
      name: "C# Purple",
      scope: "entity.name.type.namespace.cs",
      settings: {
        foreground: colors.palette.purple,
      },
    },
    {
      name: "C# Red",
      scope: "keyword.other.using.cs",
      settings: {
        foreground: colors.palette.red,
      },
    },
    {
      name: "C# Yellow",
      scope: [
        "constant.character.escape.cs",
        "keyword.type.cs",
        "punctuation.definition.interpolation.begin.cs",
        "punctuation.definition.interpolation.end.cs",
      ],
      settings: {
        foreground: colors.palette.yellow,
      },
    },
    {
      name: "C++ Aqua",
      scope: "variable.other.member.cpp",
      settings: {
        foreground: colors.palette.aqua,
      },
    },
    {
      name: "C++ Blue",
      scope: [
        "storage.type.modifier.access.control.private.cpp",
        "storage.type.modifier.access.control.public.cpp",
      ],
      settings: {
        foreground: colors.palette.blue,
      },
    },
    {
      name: "C++ Grey",
      scope: [
        "constant.character.escape.line-continuation.cpp",
        "punctuation.separator.dot-access.cpp",
      ],
      settings: {
        foreground: colors.contrast.grey1,
      },
    },
    {
      name: "C++ Orange",
      scope: [
        "punctuation.section.angle-brackets.begin.template.call.cpp",
        "punctuation.section.angle-brackets.end.template.call.cpp",
        "punctuation.separator.pointer-access.cpp",
      ],
      settings: {
        foreground: colors.palette.orange,
      },
    },
    {
      name: "C++ Red",
      scope: [
        "keyword.control.directive.conditional.cpp",
        "keyword.control.directive.conditional.if.cpp",
        "keyword.control.directive.conditional.ifdef.cpp",
        "keyword.control.directive.conditional.ifndef.cpp",
        "keyword.control.directive.define.cpp",
        "keyword.control.directive.diagnostic.error.cpp",
        "keyword.control.directive.else.cpp",
        "keyword.control.directive.endif.cpp",
        "keyword.control.directive.include.cpp",
        "keyword.control.directive.line.cpp",
        "keyword.control.directive.pragma.cpp",
        "keyword.control.directive.undef.cpp",
        "keyword.other.using.directive.cpp",
        "punctuation.definition.directive.cpp",
        "storage.type.namespace.definition.cpp",
        "storage.type.struct.cpp",
      ],
      settings: {
        foreground: colors.palette.red,
      },
    },
    {
      name: "C++ White",
      scope: [
        "meta.body.function.definition.cpp",
        "meta.function-call.cpp",
        "meta.function.definition.parameters.cpp",
        "storage.modifier.array.bracket.square.cpp",
      ],
      settings: {
        foreground: colors.palette.fg1,
      },
    },
    {
      name: "Class",
      scope: [
        "entity.name.class",
        "entity.name.type.class",
        "entity.other.inherited-class",
        "storage.class",
        "support.class",
      ],
      settings: {
        foreground: colors.palette.blue,
      },
    },
    {
      name: "Clojure Blue",
      scope: "entity.name.function.clojure",
      settings: {
        foreground: colors.palette.blue,
      },
    },
    {
      name: "Clojure Green",
      scope: [
        "constant.keyword.clojure",
        "meta.definition.variable.clojure",
        "support.variable.clojure",
      ],
      settings: {
        foreground: colors.palette.green,
      },
    },
    {
      name: "Clojure Purple",
      scope: "entity.global.clojure",
      settings: {
        foreground: colors.palette.purple,
      },
    },
    {
      name: "CMake Aqua",
      scope: "entity.source.cmake",
      settings: {
        foreground: colors.palette.aqua,
      },
    },
    {
      name: "CMake Green",
      scope: "string.source.cmake",
      settings: {
        foreground: colors.palette.green,
      },
    },
    {
      name: "CMake Purple",
      scope: "storage.source.cmake",
      settings: {
        foreground: colors.palette.purple,
      },
    },
    {
      name: "CoffeeScript Orange",
      scope: "storage.type.function.coffee",
      settings: {
        foreground: colors.palette.orange,
      },
    },
    {
      name: "Comment",
      scope: ["comment", "punctuation.definition.comment", "string.comment"],
      settings: {
        foreground: colors.contrast.grey1,
        fontStyle: "italic",
      },
    },
    {
      name: "Constant",
      scope: ["constant.language", "support.constant"],
      settings: {
        foreground: colors.palette.purple,
      },
    },
    {
      name: "CSS Aqua",
      scope: "support.type.property-name.css",
      settings: {
        foreground: colors.palette.aqua,
      },
    },
    {
      name: "CSS Blue",
      scope: "support.type.vendored.property-name.css",
      settings: {
        foreground: colors.palette.blue,
      },
    },
    {
      name: "CSS Green",
      scope: [
        "constant.numeric.css",
        "meta.property-value.css",
        "punctuation.definition.string.begin.css",
        "punctuation.definition.string.end.css",
        "string.quoted.double.css",
        "string.quoted.single.css",
        "support.constant.font-name.css",
        "support.constant.property-value.css",
        "variable.parameter.keyframe-list.css",
      ],
      settings: {
        foreground: colors.palette.green,
      },
    },
    {
      name: "CSS Grey",
      scope: [
        "punctuation.definition.entity.css",
        "punctuation.separator.key-value.css",
        "punctuation.separator.list.comma.css",
        "punctuation.terminator.rule.css",
      ],
      settings: {
        foreground: colors.contrast.grey1,
      },
    },
    {
      name: "CSS Orange",
      scope: "keyword.other.unit",
      settings: {
        foreground: colors.palette.orange,
      },
    },
    {
      name: "CSS Purple",
      scope: [
        "entity.name.tag.css",
        "entity.other.keyframe-offset.css",
        "keyword.control.at-rule.keyframes.css",
        "meta.selector.css",
        "punctuation.definition.keyword.css",
      ],
      settings: {
        foreground: colors.palette.purple,
      },
    },
    {
      name: "CSS Red",
      scope: "entity.other.attribute-name.class.css",
      settings: {
        foreground: colors.palette.red,
      },
    },
    {
      name: "CSS Yellow",
      scope: [
        "entity.other.attribute-name.pseudo-class.css",
        "entity.other.attribute-name.pseudo-element.css",
      ],
      settings: {
        foreground: colors.palette.yellow,
      },
    },
    {
      name: "Dart Blue",
      scope: "variable.language.dart",
      settings: {
        foreground: colors.palette.blue,
      },
    },
    {
      name: "Dart Green",
      scope: [
        "entity.name.function.dart",
        "string.interpolated.double.dart",
        "string.interpolated.single.dart",
      ],
      settings: {
        foreground: colors.palette.green,
      },
    },
    {
      name: "Dart Grey",
      scope: "punctuation.dot.dart",
      settings: {
        foreground: colors.contrast.grey1,
      },
    },
    {
      name: "Dart Orange",
      scope: "storage.type.primitive.dart",
      settings: {
        foreground: colors.palette.orange,
      },
    },
    {
      name: "Dart Purple",
      scope: ["keyword.other.import.dart", "storage.type.annotation.dart"],
      settings: {
        foreground: colors.palette.purple,
      },
    },
    {
      name: "Dart Yellow",
      scope: "support.class.dart",
      settings: {
        foreground: colors.palette.yellow,
      },
    },
    {
      name: "Debug",
      scope: "keyword.other.debugger",
      settings: {
        foreground: colors.palette.red,
      },
    },
    {
      name: "Delimiter",
      scope: ["meta.brace", "meta.bracket", "meta.delimiter", "punctuation"],
      settings: {
        foreground: colors.palette.fg,
      },
    },
    {
      name: "Diff Blue",
      scope: ["markup.changed.diff", "punctuation.definition.changed.diff"],
      settings: {
        foreground: colors.palette.blue,
      },
    },
    {
      name: "Diff Green",
      scope: ["markup.inserted.diff", "punctuation.definition.inserted.diff"],
      settings: {
        foreground: colors.palette.green,
      },
    },
    {
      name: "Diff Grey",
      scope: "punctuation.definition.separator.diff",
      settings: {
        foreground: colors.contrast.grey1,
      },
    },
    {
      name: "Diff Orange",
      scope: ["meta.diff.range.context", "punctuation.definition.range.diff"],
      settings: {
        foreground: colors.palette.orange,
      },
    },
    {
      name: "Diff Purple",
      scope: "punctuation.definition.from-file.diff",
      settings: {
        foreground: colors.palette.purple,
      },
    },
    {
      name: "Diff Red",
      scope: ["markup.deleted.diff", "punctuation.definition.deleted.diff"],
      settings: {
        foreground: colors.palette.red,
      },
    },
    {
      name: "Diff Yellow",
      scope: "meta.diff.header.from-file",
      settings: {
        foreground: colors.palette.yellow,
      },
    },
    {
      name: "Elixir Aqua",
      scope: [
        "punctuation.definition.variable.elixir",
        "variable.other.readwrite.module.elixir",
      ],
      settings: {
        foreground: colors.palette.aqua,
      },
    },
    {
      name: "Elixir Blue",
      scope: "constant.language.elixir",
      settings: {
        foreground: colors.palette.blue,
      },
    },
    {
      name: "Elixir Purple",
      scope: "keyword.control.module.elixir",
      settings: {
        foreground: colors.palette.purple,
      },
    },
    {
      name: "Elm White",
      scope: "keyword.other.period.elm",
      settings: {
        foreground: colors.palette.fg,
      },
    },
    {
      name: "Elm Yellow",
      scope: "storage.type.elm",
      settings: {
        foreground: colors.palette.yellow,
      },
    },
    {
      name: "Erlang Green",
      scope: [
        "punctuation.definition.string.begin.erlang",
        "punctuation.definition.string.end.erlang",
        "string.quoted.double.erlang",
        "string.quoted.single.erlang",
      ],
      settings: {
        foreground: colors.palette.green,
      },
    },
    {
      name: "Erlang Grey",
      scope: [
        "punctuation.section.directive.begin.erlang",
        "punctuation.separator.module-function.erlang",
      ],
      settings: {
        foreground: colors.contrast.grey1,
      },
    },
    {
      name: "Erlang Purple",
      scope: [
        "keyword.control.directive.behaviour.erlang",
        "keyword.control.directive.export.erlang",
        "keyword.control.directive.import.erlang",
        "keyword.control.directive.module.erlang",
      ],
      settings: {
        foreground: colors.palette.purple,
      },
    },
    {
      name: "Erlang Red",
      scope: [
        "keyword.control.directive.define.erlang",
        "keyword.control.directive.erlang",
      ],
      settings: {
        foreground: colors.palette.red,
      },
    },
    {
      name: "Erlang Yellow",
      scope: "entity.name.type.class.module.erlang",
      settings: {
        foreground: colors.palette.yellow,
      },
    },
    {
      name: "F# Blue",
      scope: "entity.name.section.fsharp",
      settings: {
        foreground: colors.palette.blue,
      },
    },
    {
      name: "F# Green",
      scope: [
        "punctuation.definition.string.begin.fsharp",
        "punctuation.definition.string.end.fsharp",
        "string.quoted.double.fsharp",
        "string.quoted.single.fsharp",
      ],
      settings: {
        foreground: colors.palette.green,
      },
    },
    {
      name: "F# Purple",
      scope: "support.function.attribute.fsharp",
      settings: {
        foreground: colors.palette.purple,
      },
    },
    {
      name: "F# White",
      scope: ["constant.language.unit.fsharp", "keyword.symbol.fsharp"],
      settings: {
        foreground: colors.palette.fg,
      },
    },
    {
      name: "F# Yellow",
      scope: ["entity.name.type.fsharp", "keyword.format.specifier.fsharp"],
      settings: {
        foreground: colors.palette.yellow,
      },
    },
    {
      name: "Fish Blue",
      scope: [
        "punctuation.definition.variable.fish",
        "variable.other.fixed.fish",
        "variable.other.normal.fish",
        "variable.other.special.fish",
      ],
      settings: {
        foreground: colors.palette.blue,
      },
    },
    {
      name: "Fish Green",
      scope: [
        "punctuation.definition.string.begin.fish",
        "punctuation.definition.string.end.fish",
        "string.quoted.double.fish",
        "string.quoted.single.fish",
      ],
      settings: {
        foreground: colors.palette.green,
      },
    },
    {
      name: "Fish Orange",
      scope: "support.function.unix.fish",
      settings: {
        foreground: colors.palette.orange,
      },
    },
    {
      name: "Fish Purple",
      scope: "constant.character.escape.single.fish",
      settings: {
        foreground: colors.palette.purple,
      },
    },
    {
      name: "Fish Red",
      scope: "support.function.builtin.fish",
      settings: {
        foreground: colors.palette.red,
      },
    },
    {
      name: "Function",
      scope: [
        "entity.name.function",
        "meta.definition.method",
        "meta.function-call",
        "meta.function",
        "support.function",
      ],
      settings: {
        foreground: colors.palette.green,
      },
    },
    {
      name: "Git Aqua",
      scope: "keyword.other.definition.ini",
      settings: {
        foreground: colors.palette.aqua,
      },
    },
    {
      name: "Git Green",
      scope: [
        "punctuation.definition.string.begin.ini",
        "punctuation.definition.string.end.ini",
        "string.quoted.double.ini",
        "string.quoted.single.ini",
      ],
      settings: {
        foreground: colors.palette.green,
      },
    },
    {
      name: "Git Orange",
      scope: "punctuation.separator.key-value.ini",
      settings: {
        foreground: colors.palette.orange,
      },
    },
    {
      name: "Git Red",
      scope: [
        "entity.name.section.group-title.ini",
        "punctuation.definition.entity.ini",
      ],
      settings: {
        foreground: colors.palette.red,
      },
    },
    {
      name: "Go Aqua",
      scope: "entity.name.package.go",
      settings: {
        foreground: colors.palette.aqua,
      },
    },
    {
      name: "Go Purple",
      scope: ["keyword.import.go", "keyword.package.go"],
      settings: {
        foreground: colors.palette.purple,
      },
    },
    {
      name: "Go Red",
      scope: "keyword.type.go",
      settings: {
        foreground: colors.palette.red,
      },
    },
    {
      name: "GraphQL Aqua",
      scope: "constant.character.enum.graphql",
      settings: {
        foreground: colors.palette.aqua,
      },
    },
    {
      name: "GraphQL Blue",
      scope: "variable.parameter.graphql",
      settings: {
        foreground: colors.palette.blue,
      },
    },
    {
      name: "GraphQL Purple",
      scope: "entity.name.fragment.graphql",
      settings: {
        foreground: colors.palette.purple,
      },
    },
    {
      name: "GraphQL Red",
      scope: "keyword.type.graphql",
      settings: {
        foreground: colors.palette.red,
      },
    },
    {
      name: "GraphQL White",
      scope: "string.unquoted.alias.graphql",
      settings: {
        foreground: colors.palette.fg,
      },
    },
    {
      name: "GraphQL Yellow",
      scope: "support.type.graphql",
      settings: {
        foreground: colors.palette.yellow,
      },
    },
    {
      name: "Groovy Aqua",
      scope: [
        "storage.modifier.import.groovy",
        "storage.modifier.package.groovy",
      ],
      settings: {
        foreground: colors.palette.aqua,
      },
    },
    {
      name: "Groovy Green",
      scope: ["meta.method.groovy", "variable.other.interpolated.groovy"],
      settings: {
        foreground: colors.palette.green,
      },
    },
    {
      name: "Groovy Grey",
      scope: "punctuation.separator.groovy",
      settings: {
        foreground: colors.contrast.grey1,
      },
    },
    {
      name: "Groovy Orange",
      scope: "storage.type.def.groovy",
      settings: {
        foreground: colors.palette.orange,
      },
    },
    {
      name: "Groovy Purple",
      scope: "storage.type.annotation.groovy",
      settings: {
        foreground: colors.palette.purple,
      },
    },
    {
      name: "Groovy Red",
      scope: [
        "keyword.other.import.groovy",
        "keyword.other.import.static.groovy",
        "keyword.other.package.groovy",
      ],
      settings: {
        foreground: colors.palette.red,
      },
    },
    {
      name: "Groovy White",
      scope: [
        "keyword.operator.navigation.groovy",
        "meta.definition.method.groovy",
      ],
      settings: {
        foreground: colors.palette.fg,
      },
    },
    {
      name: "Haskell Aqua",
      scope: ["entity.name.namespace.haskell", "meta.preprocessor.haskell"],
      settings: {
        foreground: colors.palette.aqua,
      },
    },
    {
      name: "Haskell Blue",
      scope: "entity.name.function.haskell",
      settings: {
        foreground: colors.palette.blue,
      },
    },
    {
      name: "Haskell Green",
      scope: [
        "constant.other.haskell",
        "punctuation.definition.string.begin.haskell",
        "punctuation.definition.string.end.haskell",
        "string.quoted.double.haskell",
        "string.quoted.single.haskell",
      ],
      settings: {
        foreground: colors.palette.green,
      },
    },
    {
      name: "Haskell Orange",
      scope: [
        "keyword.other.arrow.haskell",
        "keyword.other.big-arrow.haskell",
        "keyword.other.double-colon.haskell",
      ],
      settings: {
        foreground: colors.palette.orange,
      },
    },
    {
      name: "Haskell Yellow",
      scope: "storage.type.haskell",
      settings: {
        foreground: colors.palette.yellow,
      },
    },
    {
      name: "Html Green",
      scope: [
        "meta.tag.block.any.html",
        "meta.tag.inline.any.html",
        "meta.tag.other.html",
        "meta.tag.preprocessor.xml",
        "meta.tag.xml",
        "punctuation.definition.string.begin.html",
        "punctuation.definition.string.begin.xml",
        "punctuation.definition.string.end.html",
        "punctuation.definition.string.end.xml",
        "punctuation.definition.tag.begin.html",
        "punctuation.definition.tag.end.html",
        "punctuation.definition.tag.xml",
        "punctuation.separator.key-value.html",
        "string.quoted.double.html",
        "string.quoted.double.xml",
        "string.quoted.single.html",
        "string.quoted.single.xml",
      ],
      settings: {
        foreground: colors.palette.green,
      },
    },
    {
      name: "Html Grey",
      scope: "punctuation.separator.namespace.xml",
      settings: {
        foreground: colors.contrast.grey1,
      },
    },
    {
      name: "Html Orange",
      scope: [
        "entity.name.tag.html",
        "entity.name.tag.localname.xml",
        "entity.name.tag.xml",
      ],
      settings: {
        foreground: colors.palette.orange,
      },
    },
    {
      name: "Html Purple",
      scope: [
        "meta.tag.sgml.doctype.xml",
        "variable.language.documentroot.xml",
      ],
      settings: {
        foreground: colors.palette.purple,
      },
    },
    {
      name: "Html Yellow",
      scope: [
        "entity.other.attribute-name.html",
        "entity.other.attribute-name.localname.xml",
        "entity.other.attribute-name.xml",
      ],
      settings: {
        foreground: colors.palette.yellow,
      },
    },
    {
      name: "Identifier",
      scope: ["meta.definition.variable", "support.variable", "variable"],
      settings: {
        foreground: colors.palette.fg,
      },
    },
    {
      name: "Java Aqua",
      scope: "variable.other.property.java",
      settings: {
        foreground: colors.palette.aqua,
      },
    },
    {
      name: "Java Grey",
      scope: [
        "punctuation.separator.java",
        "punctuation.separator.period.java",
      ],
      settings: {
        foreground: colors.contrast.grey1,
      },
    },
    {
      name: "Java Orange",
      scope: [
        "keyword.control.ternary.java",
        "storage.type.function.arrow.java",
      ],
      settings: {
        foreground: colors.palette.orange,
      },
    },
    {
      name: "Java Purple",
      scope: [
        "entity.name.type.module.java",
        "punctuation.definition.annotation.java",
        "storage.modifier.import.java",
        "storage.modifier.package.java",
        "storage.type.annotation.java",
        "variable.language.wildcard.java",
      ],
      settings: {
        foreground: colors.palette.purple,
      },
    },
    {
      name: "Java Red",
      scope: ["keyword.other.import.java", "keyword.other.package.java"],
      settings: {
        foreground: colors.palette.red,
      },
    },
    {
      name: "Java White",
      scope: ["meta.definition.method.signature.java", "meta.method.body.java"],
      settings: {
        foreground: colors.palette.fg,
      },
    },

    {
      name: "JavaScript Aqua",
      scope: [
        "keyword.control.export.js",
        "keyword.control.from.js",
        "keyword.control.import.js",
      ],
      settings: {
        foreground: colors.palette.aqua,
      },
    },
    {
      name: "JavaScript Grey",
      scope: [
        "keyword.operator.accessor.js",
        "punctuation.accessor.js",
        "punctuation.separator.key-value.js",
        "punctuation.separator.label.js",
      ],
      settings: {
        foreground: colors.contrast.grey1,
      },
    },
    {
      name: "JavaScript Orange",
      scope: ["storage.type.function.arrow.js", "storage.type.js"],
      settings: {
        foreground: colors.palette.orange,
      },
    },
    {
      name: "JavaScript Red",
      scope: "punctuation.definition.block.tag.jsdoc",
      settings: {
        foreground: colors.palette.red,
      },
    },
    {
      name: "JavaScript White",
      scope: "string.unquoted.js",
      settings: {
        foreground: colors.palette.fg,
      },
    },
    {
      name: "JSON Green",
      scope: "string.quoted.double.json",
      settings: {
        foreground: colors.palette.green,
      },
    },
    {
      name: "JSON Grey",
      scope: [
        "punctuation.definition.string.begin.json",
        "punctuation.definition.string.end.json",
        "punctuation.separator.array.json",
        "punctuation.separator.dictionary.key-value.json",
        "punctuation.separator.dictionary.pair.json",
        "punctuation.support.type.property-name.begin.json",
        "punctuation.support.type.property-name.end.json",
      ],
      settings: {
        foreground: colors.contrast.grey1,
      },
    },
    {
      name: "JSON Orange",
      scope: "support.type.property-name.json",
      settings: {
        foreground: colors.palette.orange,
      },
    },
    {
      name: "JSX Green",
      scope: [
        "entity.other.attribute-name.js.jsx",
        "entity.other.attribute-name.jsx",
        "punctuation.definition.tag.begin.js.jsx",
        "punctuation.definition.tag.end.js.jsx",
        "punctuation.definition.tag.jsx",
      ],
      settings: {
        foreground: colors.palette.green,
      },
    },
    {
      name: "JSX Orange",
      scope: "support.class.component.js.jsx",
      settings: {
        foreground: colors.palette.orange,
      },
    },
    {
      name: "JSX Purple",
      scope: [
        "keyword.control.export.js.jsx",
        "keyword.control.from.js.jsx",
        "keyword.control.import.js.jsx",
      ],
      settings: {
        foreground: colors.palette.purple,
      },
    },
    {
      name: "JSX White",
      scope: ["meta.jsx.children", "text.html.jsx"],
      settings: {
        foreground: colors.palette.fg,
      },
    },
    {
      name: "Julia Aqua",
      scope: "constant.language.julia",
      settings: {
        foreground: colors.palette.aqua,
      },
    },
    {
      name: "Julia Orange",
      scope: "keyword.storage.modifier.julia",
      settings: {
        foreground: colors.palette.orange,
      },
    },
    {
      name: "Julia Purple",
      scope: "support.function.macro.julia",
      settings: {
        foreground: colors.palette.purple,
      },
    },
    {
      name: "Julia Red",
      scope: ["keyword.control.export.julia", "keyword.control.import.julia"],
      settings: {
        foreground: colors.palette.red,
      },
    },
    {
      name: "Keyword",
      scope: [
        "keyword.operator.delete",
        "keyword.operator.expression",
        "keyword.operator.new",
        "keyword",
        "storage.type.class",
        "storage.type.enum",
        "storage.type.extends",
        "storage.type.function",
        "storage.type.interface",
        "storage.type.property",
      ],
      settings: {
        foreground: colors.palette.red,
      },
    },
    {
      name: "Kotlin Aqua",
      scope: "constant.language.kotlin",
      settings: {
        foreground: colors.palette.aqua,
      },
    },
    {
      name: "Kotlin Orange",
      scope: "storage.type.kotlin",
      settings: {
        foreground: colors.palette.orange,
      },
    },
    {
      name: "Kotlin Purple",
      scope: ["entity.name.package.kotlin", "storage.type.annotation.kotlin"],
      settings: {
        foreground: colors.palette.purple,
      },
    },
    {
      name: "Kotlin Red",
      scope: "keyword.other.import.kotlin",
      settings: {
        foreground: colors.palette.red,
      },
    },
    {
      name: "Label",
      scope: ["constant.other.label", "entity.name.label"],
      settings: {
        foreground: colors.palette.aqua,
      },
    },
    {
      name: "LaTex Delimiter",
      scope: [
        "constant.character.newline.tex",
        "punctuation.definition.function.latex",
        "punctuation.definition.function.tex",
        "punctuation.definition.keyword.latex",
        "punctuation.definition.keyword.tex",
      ],
      settings: {
        foreground: colors.contrast.grey1,
      },
    },
    {
      name: "LaTex Orange",
      scope: [
        "keyword.control.table.cell.latex",
        "keyword.control.table.newline.latex",
        "support.function.section.latex",
      ],
      settings: {
        foreground: colors.palette.orange,
      },
    },
    {
      name: "LaTex Purple",
      scope: "keyword.control.preamble.latex",
      settings: {
        foreground: colors.palette.purple,
      },
    },
    {
      name: "LaTex Red",
      scope: "support.function.be.latex",
      settings: {
        foreground: colors.palette.red,
      },
    },
    {
      name: "LaTex Yellow",
      scope: [
        "constant.other.reference.label.latex",
        "support.class.latex",
        "variable.parameter.definition.label.latex",
        "variable.parameter.function.latex",
        "variable.parameter.latex",
      ],
      settings: {
        foreground: colors.palette.yellow,
      },
    },
    {
      name: "Lisp Aqua",
      scope: "entity.name.function.lisp",
      settings: {
        foreground: colors.palette.aqua,
      },
    },
    {
      name: "Lisp Green",
      scope: "keyword.constant.lisp",
      settings: {
        foreground: colors.palette.green,
      },
    },
    {
      name: "Lisp Red",
      scope: "storage.type.function-type.lisp",
      settings: {
        foreground: colors.palette.red,
      },
    },
    {
      name: "Lisp White",
      scope: "meta.function.lisp",
      settings: {
        foreground: colors.palette.fg,
      },
    },
    {
      name: "Lua Aqua",
      scope: "constant.language.lua",
      settings: {
        foreground: colors.palette.aqua,
      },
    },
    {
      name: "Lua Blue",
      scope: "entity.name.class.lua",
      settings: {
        foreground: colors.palette.blue,
      },
    },
    {
      name: "Macro",
      scope: "entity.name.function.preprocessor",
      settings: {
        foreground: colors.palette.purple,
      },
    },
    {
      name: "Makefile Green",
      scope: "meta.scope.prerequisites.makefile",
      settings: {
        foreground: colors.palette.green,
      },
    },
    {
      name: "Makefile Orange",
      scope: "entity.name.function.target.makefile",
      settings: {
        foreground: colors.palette.orange,
      },
    },
    {
      name: "Makefile Yellow",
      scope: "variable.other.makefile",
      settings: {
        foreground: colors.palette.yellow,
      },
    },
    {
      name: "Markdown Bold",
      scope: "markup.bold",
      settings: {
        fontStyle: "bold",
      },
    },
    {
      name: "Markdown Bold Delimiter",
      scope: "punctuation.definition.bold.markdown",
      settings: {
        foreground: colors.contrast.grey1,
        fontStyle: "regular",
      },
    },
    {
      name: "Markdown Bold Italic",
      scope: ["markup.bold markup.italic", "markup.italic markup.bold"],
      settings: {
        fontStyle: "italic bold",
      },
    },
    {
      name: "Markdown Code Block",
      scope: [
        "markup.fenced_code.block.markdown",
        "markup.inline.raw.string.markdown",
      ],
      settings: {
        foreground: colors.palette.green,
      },
    },
    {
      name: "Markdown Code Delimiter",
      scope: [
        "punctuation.definition.markdown",
        "punctuation.definition.raw.markdown",
      ],
      settings: {
        foreground: colors.palette.yellow,
      },
    },
    {
      name: "Markdown Code Type",
      scope: "fenced_code.block.language",
      settings: {
        foreground: colors.palette.yellow,
      },
    },
    {
      name: "Markdown Delimiter",
      scope: [
        "punctuation.definition.constant.markdown",
        "punctuation.definition.italic.markdown",
        "punctuation.definition.metadata.markdown",
        "punctuation.definition.quote.begin.markdown",
        "punctuation.definition.string.begin.markdown",
        "punctuation.definition.string.end.markdown",
        "punctuation.separator.key-value.markdown",
      ],
      settings: {
        foreground: colors.contrast.grey1,
      },
    },
    {
      name: "Markdown Heading Delimiter",
      scope: "punctuation.definition.heading.markdown",
      settings: {
        foreground: colors.contrast.grey1,
        fontStyle: "regular",
      },
    },
    {
      name: "Markdown H1",
      scope: ["heading.1.markdown", "markup.heading.setext.1.markdown"],
      settings: {
        foreground: colors.palette.red,
        fontStyle: "bold",
      },
    },
    {
      name: "Markdown H2",
      scope: ["heading.2.markdown", "markup.heading.setext.2.markdown"],
      settings: {
        foreground: colors.palette.orange,
        fontStyle: "bold",
      },
    },
    {
      name: "Markdown H3",
      scope: "heading.3.markdown",
      settings: {
        foreground: colors.palette.yellow,
        fontStyle: "bold",
      },
    },
    {
      name: "Markdown H4",
      scope: "heading.4.markdown",
      settings: {
        foreground: colors.palette.green,
        fontStyle: "bold",
      },
    },
    {
      name: "Markdown H5",
      scope: "heading.5.markdown",
      settings: {
        foreground: colors.palette.blue,
        fontStyle: "bold",
      },
    },
    {
      name: "Markdown H6",
      scope: "heading.6.markdown",
      settings: {
        foreground: colors.palette.purple,
        fontStyle: "bold",
      },
    },
    {
      name: "Markdown Italic",
      scope: "markup.italic",
      settings: {
        fontStyle: "italic",
      },
    },
    {
      name: "Markdown Link",
      scope: [
        "constant.other.reference.link.markdown",
        "string.other.link.description.markdown",
        "string.other.link.title.markdown",
      ],
      settings: {
        foreground: colors.palette.purple,
        fontStyle: "regular",
      },
    },
    {
      name: "Markdown Link Text",
      scope: [
        "markup.underline.link.image.markdown",
        "markup.underline.link.markdown",
      ],
      settings: {
        foreground: colors.palette.green,
        fontStyle: "underline",
      },
    },
    {
      name: "Markdown List Mark",
      scope: "punctuation.definition.list.begin.markdown",
      settings: {
        foreground: colors.palette.red,
      },
    },
    {
      name: "Markdown Separator Delimiter",
      scope: [
        "meta.separator.markdown",
        "punctuation.definition.constant.begin.markdown",
        "punctuation.definition.constant.end.markdown",
      ],
      settings: {
        foreground: colors.contrast.grey1,
        fontStyle: "bold",
      },
    },
    {
      name: "Modules",
      scope: [
        "entity.name.type.class.module",
        "entity.name.type.module",
        "keyword.control.module",
        "support.module",
        "support.node",
        "support.other.module",
        "support.type.object.module",
      ],
      settings: {
        foreground: colors.palette.aqua,
      },
    },
    {
      name: "Number",
      scope: "constant.numeric",
      settings: {
        foreground: colors.palette.purple,
      },
    },
    {
      name: "OCaml Aqua",
      scope: "constant.language.variant.ocaml",
      settings: {
        foreground: colors.palette.aqua,
      },
    },
    {
      name: "OCaml Orange",
      scope: "keyword.other.ocaml",
      settings: {
        foreground: colors.palette.orange,
      },
    },
    {
      name: "OCaml White",
      scope: "entity.name.type.value-signature.ocaml",
      settings: {
        foreground: colors.palette.fg,
      },
    },
    {
      name: "Operator",
      scope: "keyword.operator",
      settings: {
        foreground: colors.palette.orange,
      },
    },
    {
      name: "Perl Red",
      scope: ["storage.type.declare.routine.perl", "storage.type.sub.perl"],
      settings: {
        foreground: colors.palette.red,
      },
    },
    {
      name: "PHP Aqua",
      scope: ["constant.language.php", "support.other.namespace.php"],
      settings: {
        foreground: colors.palette.aqua,
      },
    },
    {
      name: "PHP Orange",
      scope: "storage.type.trait.php",
      settings: {
        foreground: colors.palette.orange,
      },
    },
    {
      name: "PHP Purple",
      scope: ["keyword.control.import.include.php", "storage.type.php"],
      settings: {
        foreground: colors.palette.purple,
      },
    },
    {
      name: "PHP White",
      scope: "keyword.operator.class.php",
      settings: {
        foreground: colors.palette.fg,
      },
    },
    {
      name: "PowerShell Aqua",
      scope: "variable.other.member.powershell",
      settings: {
        foreground: colors.palette.aqua,
      },
    },
    {
      name: "PowerShell Green",
      scope: [
        "punctuation.definition.string.begin.powershell",
        "punctuation.definition.string.end.powershell",
        "string.quoted.double.heredoc.powershell",
        "string.quoted.double.powershell",
        "string.quoted.single.powershell",
      ],
      settings: {
        foreground: colors.palette.green,
      },
    },
    {
      name: "PowerShell Grey",
      scope: "punctuation.definition.variable.powershell",
      settings: {
        foreground: colors.contrast.grey1,
      },
    },
    {
      name: "PowerShell Yellow",
      scope: [
        "entity.name.function.powershell",
        "support.function.attribute.powershell",
        "support.function.powershell",
      ],
      settings: {
        foreground: colors.palette.yellow,
      },
    },
    {
      name: "Preproc",
      scope: [
        "entity.name.scope-resolution",
        "entity.name.type.namespace",
        "keyword.control.at-rule",
        "keyword.control.directive",
        "keyword.control.export",
        "keyword.control.import",
        "keyword.import",
        "keyword.map",
        "keyword.other.import",
        "keyword.other.package",
        "keyword.other.using",
        "keyword.package",
        "keyword.preprocessor",
        "punctuation.decorator",
        "punctuation.definition.directive",
        "punctuation.definition.preprocessor",
      ],
      settings: {
        foreground: colors.palette.aqua,
      },
    },
    {
      name: "Property",
      scope: [
        "meta.object-literal.key",
        "support.variable.property",
        "variable.object.property",
        "variable.other.enummember",
        "variable.other.member",
        "variable.other.object.property",
        "variable.other.property",
      ],
      settings: {
        foreground: colors.palette.fg,
      },
    },
    {
      name: "Proto Aqua",
      scope: ["entity.name.class.message.proto", "entity.name.class.proto"],
      settings: {
        foreground: colors.palette.aqua,
      },
    },
    {
      name: "Proto Green",
      scope: [
        "string.quoted.double.proto.syntax",
        "string.quoted.double.proto",
        "string.quoted.single.proto.syntax",
        "string.quoted.single.proto",
      ],
      settings: {
        foreground: colors.palette.green,
      },
    },
    {
      name: "Proto Yellow",
      scope: "storage.type.proto",
      settings: {
        foreground: colors.palette.yellow,
      },
    },
    {
      name: "Pug Aqua",
      scope: "entity.other.attribute-name.tag.pug",
      settings: {
        foreground: colors.palette.aqua,
      },
    },
    {
      name: "Pug Orange",
      scope: "storage.type.function.pug",
      settings: {
        foreground: colors.palette.orange,
      },
    },
    {
      name: "Pug Purple",
      scope: ["entity.name.tag.pug", "storage.type.import.include.pug"],
      settings: {
        foreground: colors.palette.purple,
      },
    },
    {
      name: "Pug Red",
      scope: "entity.other.attribute-name.class.pug",
      settings: {
        foreground: colors.palette.red,
      },
    },
    {
      name: "PureScript Green",
      scope: [
        "entity.name.type.purescript",
        "punctuation.definition.string.begin.purescript",
        "punctuation.definition.string.end.purescript",
        "string.quoted.double.purescript",
        "string.quoted.single.purescript",
        "string.quoted.triple.purescript",
      ],
      settings: {
        foreground: colors.palette.green,
      },
    },
    {
      name: "PureScript Orange",
      scope: [
        "keyword.other.arrow.purescript",
        "keyword.other.big-arrow.purescript",
        "keyword.other.double-colon.purescript",
      ],
      settings: {
        foreground: colors.palette.orange,
      },
    },
    {
      name: "PureScript Purple",
      scope: "support.other.module.purescript",
      settings: {
        foreground: colors.palette.purple,
      },
    },
    {
      name: "PureScript White",
      scope: "meta.type-signature.purescript",
      settings: {
        foreground: colors.palette.fg,
      },
    },
    {
      name: "PureScript Yellow",
      scope: "entity.name.function.purescript",
      settings: {
        foreground: colors.palette.yellow,
      },
    },
    {
      name: "Python Aqua",
      scope: "constant.language.python",
      settings: {
        foreground: colors.palette.aqua,
      },
    },
    {
      name: "Python Grey",
      scope: [
        "punctuation.definition.decorator.python",
        "punctuation.separator.period.python",
      ],
      settings: {
        foreground: colors.contrast.grey1,
      },
    },
    {
      name: "Python Purple",
      scope: [
        "keyword.control.import.from.python",
        "keyword.control.import.python",
        "variable.parameter.function.language.special.self",
      ],
      settings: {
        foreground: colors.palette.purple,
      },
    },
    {
      name: "Python White",
      scope: "meta.function-call.arguments.python",
      settings: {
        foreground: colors.palette.fg,
      },
    },
    {
      name: "R Aqua",
      scope: "constant.language.r",
      settings: {
        foreground: colors.palette.aqua,
      },
    },
    {
      name: "R Green",
      scope: ["entity.name.function.r", "variable.function.r"],
      settings: {
        foreground: colors.palette.green,
      },
    },
    {
      name: "R Orange",
      scope: "keyword.other.r",
      settings: {
        foreground: colors.palette.orange,
      },
    },
    {
      name: "R Purple",
      scope: "entity.namespace.r",
      settings: {
        foreground: colors.palette.purple,
      },
    },
    {
      name: "ReStructuredText Aqua",
      scope: [
        "entity.name.tag.restructuredtext",
        "punctuation.definition.link.restructuredtext",
        "punctuation.definition.raw.restructuredtext",
        "punctuation.section.raw.restructuredtext",
      ],
      settings: {
        foreground: colors.palette.aqua,
      },
    },
    {
      name: "ReStructuredText Delimiter",
      scope: [
        "punctuation.definition.constant.restructuredtext",
        "punctuation.definition.directive.restructuredtext",
        "punctuation.definition.field.restructuredtext",
        "punctuation.definition.italic.restructuredtext",
        "punctuation.definition.table.restructuredtext",
        "punctuation.separator.key-value.restructuredtext",
      ],
      settings: {
        foreground: colors.contrast.grey1,
      },
    },
    {
      name: "ReStructuredText Delimiter Bold",
      scope: "punctuation.definition.bold.restructuredtext",
      settings: {
        foreground: colors.contrast.grey1,
        fontStyle: "regular",
      },
    },
    {
      name: "ReStructuredText Green",
      scope: [
        "entity.name.directive.restructuredtext",
        "markup.raw.inner.restructuredtext",
        "markup.raw.restructuredtext",
        "string.other.link.title.restructuredtext",
      ],
      settings: {
        foreground: colors.palette.green,
      },
    },
    {
      name: "ReStructuredText heading",
      scope: "punctuation.definition.heading.restructuredtext",
      settings: {
        foreground: colors.palette.orange,
        fontStyle: "bold",
      },
    },
    {
      name: "ReStructuredText Purple",
      scope: "constant.other.footnote.link.restructuredtext",
      settings: {
        foreground: colors.palette.purple,
      },
    },
    {
      name: "ReStructuredText Red",
      scope: "support.directive.restructuredtext",
      settings: {
        foreground: colors.palette.red,
      },
    },
    {
      name: "Ruby Blue",
      scope: "variable.other.constant.ruby",
      settings: {
        foreground: colors.palette.blue,
      },
    },
    {
      name: "Ruby Green",
      scope: "keyword.other.special-method.ruby",
      settings: {
        foreground: colors.palette.green,
      },
    },
    {
      name: "Ruby Grey",
      scope: "punctuation.separator.method.ruby",
      settings: {
        foreground: colors.contrast.grey1,
      },
    },
    {
      name: "Ruby Orange",
      scope: [
        "keyword.control.pseudo-method.ruby",
        "storage.type.variable.ruby",
      ],
      settings: {
        foreground: colors.palette.orange,
      },
    },
    {
      name: "Ruby Purple",
      scope: [
        "keyword.control.module.ruby",
        "punctuation.definition.constant.ruby",
      ],
      settings: {
        foreground: colors.palette.purple,
      },
    },
    {
      name: "Ruby White",
      scope: "meta.function.method.with-arguments.ruby",
      settings: { foreground: colors.palette.fg },
    },
    {
      name: "Ruby Yellow",
      scope: [
        "punctuation.definition.character-class.ruby",
        "punctuation.definition.group.ruby",
        "punctuation.section.regexp.ruby",
        "string.regexp.character-class.ruby",
        "string.regexp.group.ruby",
        "string.regexp.interpolated.ruby",
      ],
      settings: {
        foreground: colors.palette.yellow,
      },
    },
    {
      name: "Rust Aqua",
      scope: "support.constant.core.rust",
      settings: {
        foreground: colors.palette.aqua,
      },
    },
    {
      name: "Rust Grey",
      scope: [
        "keyword.operator.member-access.rust",
        "keyword.operator.path.rust",
      ],
      settings: {
        foreground: colors.contrast.grey1,
      },
    },
    {
      name: "Rust Purple",
      scope: [
        "meta.attribute.rust",
        "storage.type.module.rust",
        "variable.language.rust",
      ],
      settings: {
        foreground: colors.palette.purple,
      },
    },
    {
      name: "Rust Red",
      scope: "storage.type.rust",
      settings: {
        foreground: colors.palette.red,
      },
    },
    {
      name: "Rust White",
      scope: "entity.name.type.mod.rust",
      settings: {
        foreground: colors.palette.fg,
      },
    },
    {
      name: "Rust Yellow",
      scope: "entity.name.type.enum.rust",
      settings: {
        foreground: colors.palette.yellow,
      },
    },
    {
      name: "SASS Green",
      scope: [
        "constant.character.css.sass",
        "meta.property-value.scss",
        "punctuation.definition.string.begin.scss",
        "punctuation.definition.string.end.scss",
        "string.quoted.double.scss",
        "string.quoted.single.scss",
      ],
      settings: {
        foreground: colors.palette.green,
      },
    },
    {
      name: "SASS Grey",
      scope: [
        "punctuation.definition.entity.scss",
        "punctuation.separator.key-value.scss",
        "punctuation.separator.list.comma.scss",
        "punctuation.terminator.rule.scss",
      ],
      settings: {
        foreground: colors.contrast.grey1,
      },
    },
    {
      name: "SASS Orange",
      scope: "keyword.control.at-rule.keyframes.scss",
      settings: {
        foreground: colors.palette.orange,
      },
    },
    {
      name: "SASS Purple",
      scope: [
        "keyword.control.at-rule.extend.scss",
        "keyword.control.at-rule.import.scss",
        "keyword.control.at-rule.include.scss",
        "keyword.control.at-rule.mixin.scss",
        "keyword.control.at-rule.use.scss",
      ],
      settings: {
        foreground: colors.palette.purple,
      },
    },
    {
      name: "SASS Yellow",
      scope: [
        "punctuation.definition.interpolation.begin.bracket.curly.scss",
        "punctuation.definition.interpolation.end.bracket.curly.scss",
      ],
      settings: {
        foreground: colors.palette.yellow,
      },
    },
    {
      name: "Scala Aqua",
      scope: "entity.name.import.scala",
      settings: {
        foreground: colors.palette.aqua,
      },
    },
    {
      name: "Scala Blue",
      scope: "constant.language.scala",
      settings: {
        foreground: colors.palette.blue,
      },
    },
    {
      name: "Scala Green",
      scope: [
        "punctuation.definition.string.begin.scala",
        "punctuation.definition.string.end.scala",
        "string.quoted.double.interpolated.scala",
        "string.quoted.double.scala",
        "string.quoted.single.interpolated.scala",
        "string.quoted.single.scala",
        "string.quoted.triple.scala",
      ],
      settings: {
        foreground: colors.palette.green,
      },
    },
    {
      name: "Scala Orange",
      scope: ["keyword.declaration.stable.scala", "keyword.other.arrow.scala"],
      settings: {
        foreground: colors.palette.orange,
      },
    },
    {
      name: "Scala Purple",
      scope: "entity.name.package.scala",
      settings: {
        foreground: colors.palette.purple,
      },
    },
    {
      name: "Scala Red",
      scope: "keyword.other.import.scala",
      settings: {
        foreground: colors.palette.red,
      },
    },
    {
      name: "Scala Yellow",
      scope: ["entity.name.class.scala", "entity.other.inherited-class.scala"],
      settings: {
        foreground: colors.palette.yellow,
      },
    },
    {
      name: "Shell Green",
      scope: [
        "punctuation.definition.string.begin.shell",
        "punctuation.definition.string.end.shell",
        "string.quoted.double.shell",
        "string.quoted.single.shell",
        "string.unquoted.heredoc.shell",
      ],
      settings: {
        foreground: colors.palette.green,
      },
    },
    {
      name: "Shell Purple",
      scope: [
        "keyword.control.heredoc-token.shell",
        "punctuation.definition.variable.shell",
        "variable.other.bracket.shell",
        "variable.other.normal.shell",
        "variable.other.positional.shell",
        "variable.other.special.shell",
      ],
      settings: {
        foreground: colors.palette.purple,
      },
    },
    {
      name: "Shell White",
      scope: ["meta.scope.group.shell", "meta.scope.if-block.shell"],
      settings: {
        foreground: colors.palette.fg,
      },
    },
    {
      name: "Shell Yellow",
      scope: ["entity.name.function.shell", "support.function.builtin.shell"],
      settings: {
        foreground: colors.palette.yellow,
      },
    },
    {
      name: "Special Identifier",
      scope: [
        "constant.language.nan",
        "constant.language.null",
        "constant.language.undefined",
        "keyword.other.this",
        "variable.language.self",
        "variable.language.special",
        "variable.language.super",
        "variable.language.this",
      ],
      settings: {
        foreground: colors.palette.purple,
      },
    },
    {
      name: "SQL Green",
      scope: [
        "punctuation.definition.string.begin.sql",
        "punctuation.definition.string.end.sql",
        "string.quoted.double.sql",
        "string.quoted.single.sql",
      ],
      settings: {
        foreground: colors.palette.green,
      },
    },
    {
      name: "SQL Yellow",
      scope: "support.function.aggregate.sql",
      settings: {
        foreground: colors.palette.yellow,
      },
    },
    {
      name: "Storage",
      scope: [
        "entity.name.tag",
        "keyword.control.case",
        "keyword.control.switch",
        "keyword.var",
        "modifier",
        "storage",
      ],
      settings: {
        foreground: colors.palette.orange,
      },
    },
    {
      name: "String",
      scope: [
        "punctuation.definition.string.begin",
        "punctuation.definition.string.end",
        "punctuation.definition.string.template.begin",
        "punctuation.definition.string.template.end",
        "string",
      ],
      settings: {
        foreground: colors.palette.yellow,
      },
    },
    {
      name: "String Escape",
      scope: [
        "constant.character.escape",
        "constant.other.placeholder",
        "punctuation.definition.template-expression",
        "punctuation.quasi.element",
        "punctuation.section.embedded",
        "storage.type.format",
        "variable.interpolation",
      ],
      settings: {
        foreground: colors.palette.green,
      },
    },
    {
      name: "Stylus White",
      scope: "meta.function.stylus",
      settings: {
        foreground: colors.palette.fg,
      },
    },
    {
      name: "Stylus Yellow",
      scope: "entity.name.function.stylus",
      settings: {
        foreground: colors.palette.yellow,
      },
    },
    {
      name: "Swift Aqua",
      scope: "support.variable.swift",
      settings: {
        foreground: colors.palette.aqua,
      },
    },
    {
      name: "Swift White",
      scope: ["meta.function-call.swift", "support.function.any-method.swift"],
      settings: {
        foreground: colors.palette.fg,
      },
    },
    {
      name: "Tmux Green",
      scope: ["constant.language.tmux", "constant.numeric.tmux"],
      settings: {
        foreground: colors.palette.green,
      },
    },
    {
      name: "TOML Blue",
      scope: "constant.other.boolean.toml",
      settings: {
        foreground: colors.palette.blue,
      },
    },
    {
      name: "TOML Green",
      scope: [
        "punctuation.definition.keyValuePair.toml",
        "string.quoted.single.basic.line.toml",
        "string.quoted.single.literal.line.toml",
      ],
      settings: {
        foreground: colors.palette.green,
      },
    },
    {
      name: "TOML Orange",
      scope: "keyword.key.toml",
      settings: {
        foreground: colors.palette.orange,
      },
    },
    {
      name: "TOML Purple",
      scope: [
        "entity.other.attribute-name.table.array.toml",
        "entity.other.attribute-name.table.toml",
        "punctuation.definition.table.array.toml",
        "punctuation.definition.table.toml",
      ],
      settings: {
        foreground: colors.palette.purple,
      },
    },
    {
      name: "TSX Aqua",
      scope: [
        "entity.name.type.alias.tsx",
        "entity.name.type.class.tsx",
        "entity.name.type.interface.tsx",
        "entity.name.type.tsx",
        "entity.other.inherited-class.tsx",
      ],
      settings: {
        foreground: colors.palette.aqua,
      },
    },
    {
      name: "TSX Green",
      scope: [
        "entity.other.attribute-name.directive.tsx",
        "entity.other.attribute-name.tsx",
        "punctuation.definition.tag.begin.tsx",
        "punctuation.definition.tag.directive.tsx",
        "punctuation.definition.tag.end.tsx",
      ],
      settings: {
        foreground: colors.palette.green,
      },
    },
    {
      name: "TSX Grey",
      scope: [
        "keyword.operator.type.annotation.tsx",
        "punctuation.accessor.tsx",
        "punctuation.separator.key-value.tsx",
      ],
      settings: {
        foreground: colors.contrast.grey1,
      },
    },
    {
      name: "TSX Orange",
      scope: [
        "storage.type.function.arrow.tsx",
        "storage.type.namespace.tsx",
        "storage.type.tsx",
        "storage.type.type.tsx",
        "support.class.component.tsx",
      ],
      settings: {
        foreground: colors.palette.orange,
      },
    },
    {
      name: "TSX Purple",
      scope: [
        "keyword.control.export.tsx",
        "keyword.control.from.tsx",
        "keyword.control.import.tsx",
      ],
      settings: {
        foreground: colors.palette.purple,
      },
    },
    {
      name: "TSX Yellow",
      scope: "entity.name.type.enum.tsx",
      settings: {
        foreground: colors.palette.yellow,
      },
    },
    {
      name: "Type",
      scope: [
        "entity.name.type",
        "keyword.type",
        "storage.type",
        "support.type",
      ],
      settings: {
        foreground: colors.palette.blue,
      },
    },
    {
      name: "TypeScript Aqua",
      scope: [
        "entity.name.type.alias.ts",
        "entity.name.type.class.ts",
        "entity.name.type.interface.ts",
        "entity.name.type.ts",
        "entity.other.inherited-class.ts",
      ],
      settings: {
        foreground: colors.palette.aqua,
      },
    },
    {
      name: "TypeScript Green",
      scope: [
        "entity.other.attribute-name.directive.ts",
        "punctuation.definition.tag.directive.ts",
      ],
      settings: {
        foreground: colors.palette.green,
      },
    },
    {
      name: "TypeScript Grey",
      scope: [
        "keyword.operator.type.annotation.ts",
        "punctuation.accessor.ts",
        "punctuation.separator.key-value.ts",
      ],
      settings: { foreground: colors.contrast.grey1 },
    },
    {
      name: "TypeScript Orange",
      scope: [
        "storage.type.function.arrow.ts",
        "storage.type.namespace.ts",
        "storage.type.ts",
        "storage.type.type.ts",
      ],
      settings: {
        foreground: colors.palette.orange,
      },
    },
    {
      name: "TypeScript Purple",
      scope: [
        "keyword.control.export.ts",
        "keyword.control.from.ts",
        "keyword.control.import.ts",
      ],
      settings: {
        foreground: colors.palette.purple,
      },
    },
    {
      name: "TypeScript Yellow",
      scope: "entity.name.type.enum.ts",
      settings: {
        foreground: colors.palette.yellow,
      },
    },
    {
      name: "VimL Blue",
      scope: "constant.character.map.special.viml",
      settings: {
        foreground: colors.palette.blue,
      },
    },
    {
      name: "VimL Green",
      scope: ["constant.character.map.key.viml", "constant.character.map.viml"],
      settings: {
        foreground: colors.palette.green,
      },
    },
    {
      name: "VimL Grey",
      scope: "punctuation.definition.map.viml",
      settings: {
        foreground: colors.contrast.grey1,
      },
    },
    {
      name: "VimL Orange",
      scope: "storage.type.map.viml",
      settings: {
        foreground: colors.palette.orange,
      },
    },
    {
      name: "YAML Aqua",
      scope: [
        "punctuation.definition.anchor.yaml",
        "punctuation.definition.block.sequence.item.yaml",
      ],
      settings: {
        foreground: colors.palette.aqua,
      },
    },
    {
      name: "YAML Green",
      scope: [
        "punctuation.definition.string.begin.yaml",
        "punctuation.definition.string.end.yaml",
        "string.quoted.double.yaml",
        "string.quoted.single.yaml",
        "string.unquoted.block.yaml",
        "string.unquoted.plain.in.yaml",
        "string.unquoted.plain.out.yaml",
      ],
      settings: {
        foreground: colors.palette.green,
      },
    },
    {
      name: "YAML Grey",
      scope: "punctuation.separator.key-value.mapping.yaml",
      settings: {
        foreground: colors.contrast.grey1,
      },
    },
  ];
}
