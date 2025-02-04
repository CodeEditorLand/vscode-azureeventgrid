/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { Topic } from "azure-arm-eventgrid/lib/models";
import { IResourceGroupWizardContext } from "vscode-azureextensionui";

export interface ITopicWizardContext extends IResourceGroupWizardContext {
	topic?: Topic;

	newTopicName?: string;
}
