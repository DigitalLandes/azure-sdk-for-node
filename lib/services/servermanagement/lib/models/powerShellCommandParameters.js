/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.16.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the PowerShellCommandParameters class.
 * @constructor
 * the parameters to a powershell script execution command
 * @member {string} [command] Script to execute
 * 
 */
function PowerShellCommandParameters() {
}

/**
 * Defines the metadata of PowerShellCommandParameters
 *
 * @returns {object} metadata of PowerShellCommandParameters
 *
 */
PowerShellCommandParameters.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'PowerShellCommandParameters',
    type: {
      name: 'Composite',
      className: 'PowerShellCommandParameters',
      modelProperties: {
        command: {
          required: false,
          serializedName: 'properties.command',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = PowerShellCommandParameters;