# Odoo Autocomplete

This simple vscode extension add snippets and intellisense in python and xml files for odoo to ease development process. [Odoo](https://www.odoo.com/) is ERP system implemented with python.

## Installation

This extension is still in development and so it is not available yet in vscode extension marketplace. So, manual installation is necessary.

1. Make sure you have [Node.js](https://nodejs.org/en/) installed and then install necessary node packages for this extension with
`npm install`

2. Install `vsce` via `npm install -g vsce`

3. `vsce package` which will create .vsix file.

4. Finally, install with `code --install-extension <vsix-file-name>.vsix`

## Features

### XML Autocomplete Keywords

Autocomplete many common odoo keywords in xml.

[video]

List of currently supported keywords

Tags: `attribute`, `record`, `field`, `button`, `xpath`, `tree`, `form`, `group`, `sheet`, `notebook`, `page`, `search`, `label`

Keys: `id`, `model`, `name`, `position`, `string`, `colspan`, `col`, `states`, `class`, `type`, `for`, `action`, `widget`, `attrs`, `editable`, `readonly`, `nolabel`, `invisible`


Special Keys:

| Keys     | Values                                                                                                                          |
|----------|---------------------------------------------------------------------------------------------------------------------------------|
| attrs    | =" { ' ' : [ ( ' ', ' ', ) ] }"                                                                                                 |
| editable | ="top"                                                                                                                          |
| position | ="attributes" or "before" or "after" or <br> "inside" or "replace" or "move"                                                    |
| widget   | ="many2many_tags" or "many2many" or <br> "progressbar" or "handle" or "date" or <br> "datetime" or "float_time" or "monetary"   |

Currently, this extension contains following features in python and xml.

Python

|         |   |
|---------|---|
| odomain |   |
| osearch |   |

XML

|             |   |
|-------------|---|
| pattributes |   |
| pbefore     |   |
| pafter      |   |


## Working with Markdown

**Note:** You can author your README using Visual Studio Code.  Here are some useful editor keyboard shortcuts:

* Split the editor (`Cmd+\` on macOS or `Ctrl+\` on Windows and Linux)
* Toggle preview (`Shift+CMD+V` on macOS or `Shift+Ctrl+V` on Windows and Linux)
* Press `Ctrl+Space` (Windows, Linux) or `Cmd+Space` (macOS) to see a list of Markdown snippets

### For more information

* [Visual Studio Code's Markdown Support](http://code.visualstudio.com/docs/languages/markdown)
* [Markdown Syntax Reference](https://help.github.com/articles/markdown-basics/)

**Enjoy!**
