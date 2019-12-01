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

			const attribute = new vscode.CompletionItem('attribute');

			// return all completion items as array
			return [
				attribute
			];
		}
	});

	context.subscriptions.push(python_provider, xml_provider);
}
