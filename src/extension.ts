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

			// simple common words in odoo xml
			// tags
			var tags_values:string[] = ['attribute', 'record', 'field', 'field', 'button', 'xpath'];
			var tags = tags_values.map(x => new vscode.CompletionItem(x));
			
			// keys
			var keys_values:string[] = ['id', 'model', 'name'];
			var keys = keys_values.map(x => new vscode.CompletionItem(x));
			const positionn = new vscode.CompletionItem('position');
			positionn.insertText = new vscode.SnippetString('position="$1"');

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
				positionn,
				pattributes, pbefore, pafter
			].concat(tags, keys, values);
		}
	});

	context.subscriptions.push(python_provider, xml_provider);
}
