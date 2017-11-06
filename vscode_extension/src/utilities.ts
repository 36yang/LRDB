/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/

'use strict';

import * as vscode from 'vscode';
import * as nls from 'vscode-nls';

export const localize = nls.config(process.env.VSCODE_NLS_CONFIG)();

export function log(message: string) {
	vscode.commands.executeCommand('debug.logToDebugConsole', message + '\n');
}