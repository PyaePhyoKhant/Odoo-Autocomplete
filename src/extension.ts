import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	let python_provider = vscode.languages.registerCompletionItemProvider(
		{ scheme: 'file', language: 'python' }, {

		provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {

			// return all completion items as array
			return [
				
			];
		}
	});

	let xml_provider = vscode.languages.registerCompletionItemProvider(
		{ scheme: 'file', language: 'xml' }, {

		provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {

			// others
			const pattributes = new vscode.CompletionItem('pattributes');
			pattributes.insertText = new vscode.SnippetString('position="attributes"');
			const pbefore = new vscode.CompletionItem('pbefore');
			pbefore.insertText = new vscode.SnippetString('position="before"');
			const pafter = new vscode.CompletionItem('pafter');
			pafter.insertText = new vscode.SnippetString('position="after"');

			// return all completion items as array
			return [
				pattributes, pbefore, pafter
			];
		}
	});

	let xml_tags_provider = vscode.languages.registerCompletionItemProvider(
		{ scheme: 'file', language: 'xml' }, {

		provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {

			let linePrefix = document.lineAt(position).text.substr(0, position.character);
			if (!(linePrefix.endsWith('<') || linePrefix.endsWith('/'))) {
				return undefined;
			}

			// tags
			var tags_values:string[] = ['attribute', 'record', 'field', 'button', 'xpath', 'tree', 'form', 'group', 'sheet', 'notebook', 'page', 'search', 'label', 'data'];
			var tags = tags_values.map(x => new vscode.CompletionItem(x, vscode.CompletionItemKind.Keyword));

			// return all completion items as array
			return tags;
		},
	}, '<', '/');

	let xml_keys_provider = vscode.languages.registerCompletionItemProvider(
		{ scheme: 'file', language: 'xml' }, {

		provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {

			let linePrefix = document.lineAt(position).text.substr(0, position.character);
			if (!linePrefix.endsWith(' ')) {
				return undefined;
			}

			// keys
			var keys_values:string[] = ['id', 'model', 'name', 'position', 'string', 'colspan', 'col', 'states', 'class', 'type', 'for', 'action', 'widget', 'attrs', 'editable'];
			var keys_one:string[] = ['readonly', 'nolabel', 'invisible', 'noupdate'];
			var postfix:string = '';
			var keys = keys_values.concat(keys_one).map(x => new vscode.CompletionItem(x, vscode.CompletionItemKind.Property));
			for (let k of keys) {
				if (k.label === 'editable') {
					postfix = '="top"';
				} else if (k.label === 'attrs') {
					postfix = '="{\'$1\': [(\'$2\', \'$3\', $4)$0]}"';
				} else if (keys_values.includes(k.label)) {
					postfix = '="$1"';
				} else if (keys_one.includes(k.label)) {
					postfix = '="1"';
				}
				k.insertText = new vscode.SnippetString(k.label + postfix);
			}

			// return all completion items as array
			return keys;
		},
	}, ' ');

	let xml_values_provider = vscode.languages.registerCompletionItemProvider(
		{ scheme: 'file', language: 'xml' }, {

		provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {

			let linePrefix = document.lineAt(position).text.substr(0, position.character);
			if (!linePrefix.endsWith('"')) {
				return undefined;
			}
			var values_values:string[];
			var values;
			if (linePrefix.endsWith('position="')) {
				values_values = ['attributes', 'before', 'after', 'inside', 'replace', 'move'];
				values = values_values.map(x => new vscode.CompletionItem(x, vscode.CompletionItemKind.Value));
			} else if (linePrefix.endsWith('widget="')) {
				values_values = ['many2many_tags', 'many2many', 'progressbar', 'handle', 'date', 'datetime', 'float_time', 'monetary'];
				values = values_values.map(x => new vscode.CompletionItem(x, vscode.CompletionItemKind.Value));
			}

			// return all completion items as array
			return values;
		},
	}, '"');

	context.subscriptions.push(python_provider, xml_provider, xml_tags_provider, xml_keys_provider, xml_values_provider);
}
