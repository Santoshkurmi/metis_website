const sidebar_Items = [
  {
    label: ["Quickstart", "i-mingcute:safe-flash-fill"],
    items: [
      ["Install", "quickstart/install"],
      ["Download", "quickstart/post-install"],
      // ["Learn basic Lua", "quickstart/learn-lua"],
    ],
  },

  {
    label: ["Walkthrough", "i-mdi-cog"],
    items: [
      ["Walkthrough", "config/walkthrough"],
      ["Snippets", "config/snippets"],
      ["Manage Plugins", "config/plugins"],
      ["Syntax highlighting", "config/syntax"],
      ["LSP Configuration", "config/lsp"],
      ["Format & Lint", "config/format_lint"],
      ["Mappings", "config/mappings"],
      ["UI Customization", "config/nvchad_ui"],
      ["Customize colors", "config/theming"],
    ],
  },
  {
    label:["Features","i-mdi:atom-variant"],
    items:[
      ["Features","features/features"]
    ]
  },

  ["KeyBindings", "keybindings", "i-tabler:server-cog"],
  // ["Features", "features", ""],
  // ["Debug config", "debugging-config", "i-ri-bug-line"],
  ["Contributing", "contribute", "i-mdi-github"],
  ["Donate", "donate", "i-line-md:heart"],
];

export default sidebar_Items;
