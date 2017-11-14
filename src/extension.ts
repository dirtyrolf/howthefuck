"use strict";
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

// const escape = text =>
//   text
//     .replace(/ /g, "+")
//     .replace(/;/g, "%3B")
//     .replace(/=/g, "%3D")
//     .replace(/\(/g, "%28")
//     .replace(/\)/g, "%29");

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Select some text and run "How the fuck?"!');

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with  registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand(
    "extension.codeSearch",
    () => {
      // The code you place here will be executed every time your command is executed

      // Display a message box to the user
      const editor = vscode.window.activeTextEditor;
      if (editor) {
        const selection = editor.selection;
        const text = editor.document.getText(selection);

        // const query = escape(text);
        const url = `https://github.com/search?utf8=✓&q=${text}&type=Code`;
        vscode.commands.executeCommand("vscode.open", vscode.Uri.parse(url));
      } else {
        vscode.window.showInformationMessage("Select something!");
      }
    }
  );

  context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
