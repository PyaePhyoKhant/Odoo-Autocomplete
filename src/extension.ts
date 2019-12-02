import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	let python_provider = vscode.languages.registerCompletionItemProvider('python', {

		provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {

			const odomain = new vscode.CompletionItem('odomain');
			odomain.insertText = new vscode.SnippetString("('$1', '$2', $3)");

			// return all completion items as array
			return [
				odomain
			];
		}
	});

	let xml_provider = vscode.languages.registerCompletionItemProvider('xml', {

		provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {

			// tags
			const attribute = new vscode.CompletionItem('attribute');
			const record = new vscode.CompletionItem('record');
			const field = new vscode.CompletionItem('field');
			const button = new vscode.CompletionItem('button');
			const xpath = new vscode.CompletionItem('xpath');
			
			// keys
			const id = new vscode.CompletionItem('id');
			const model = new vscode.CompletionItem('model');
			const name = new vscode.CompletionItem('name');
			const positionn = new vscode.CompletionItem('position');

			// values
			const attributes = new vscode.CompletionItem('attributes');
			const before = new vscode.CompletionItem('before');
			const after = new vscode.CompletionItem('after');

			// return all completion items as array
			return [
				attribute, record, field, button, xpath,
				id, model, name, positionn,
				attributes, before, after
			];
		}
	});

	context.subscriptions.push(python_provider, xml_provider);
}
