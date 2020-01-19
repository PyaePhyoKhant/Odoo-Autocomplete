import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	let python_provider = vscode.languages.registerCompletionItemProvider(
		{ scheme: 'file', language: 'python' }, {

		provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {

			const odomain = new vscode.CompletionItem('odomain');
			odomain.insertText = new vscode.SnippetString("('$1', '$2', $3)");
			const osearch = new vscode.CompletionItem('osearch');
			osearch.insertText = new vscode.SnippetString("self.env['$1'].search([$2])");
			const obrowse = new vscode.CompletionItem('obrowse');
			obrowse.insertText = new vscode.SnippetString("self.env['$1'].browse($2)");

			// return all completion items as array
			return [
				odomain, osearch, obrowse
			];
		}
	});

	let xml_provider = vscode.languages.registerCompletionItemProvider(
		{ scheme: 'file', language: 'xml' }, {

		provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {

			// values
			var values_values:string[] = ['attributes', 'before', 'after'];
			var values = values_values.map(x => new vscode.CompletionItem(x));

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
			].concat(values);
		}
	});

	let xml_tags_provider = vscode.languages.registerCompletionItemProvider(
		{ scheme: 'file', language: 'xml' }, {

		provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {

			// tags
			var tags_values:string[] = ['attribute', 'record', 'field', 'button', 'xpath', 'tree', 'form', 'group', 'sheet', 'notebook', 'page', 'search', 'label'];
			var tags = tags_values.map(x => new vscode.CompletionItem(x, vscode.CompletionItemKind.Keyword));

			// return all completion items as array
			return tags;
		},
	}, '<');

	let xml_keys_provider = vscode.languages.registerCompletionItemProvider(
		{ scheme: 'file', language: 'xml' }, {

		provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {

			// keys
			var keys_values:string[] = ['id', 'model', 'name', 'position', 'string', 'colspan', 'col', 'readonly', 'nolabel', 'invisible', 'states', 'class', 'type', 'for', 'action'];
			var keys = keys_values.map(x => new vscode.CompletionItem(x), vscode.CompletionItemKind.Property);
			for (let k of keys) {
				k.insertText = new vscode.SnippetString(k.label + '="$1"');
			}

			// return all completion items as array
			return keys;
		},
	}, ' ');

	context.subscriptions.push(python_provider, xml_provider, xml_tags_provider, xml_keys_provider);
}
