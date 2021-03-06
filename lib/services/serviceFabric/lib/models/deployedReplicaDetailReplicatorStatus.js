/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.16.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

/**
 * @class
 * Initializes a new instance of the DeployedReplicaDetailReplicatorStatus class.
 * @constructor
 * The status of the replicator
 * @member {number} [kind]
 * 
 * @member {object} [replicationQueueStatus] The status of the replication
 * queue
 * 
 * @member {string} [replicationQueueStatus.queueUtilizationPercentage]
 * 
 * @member {string} [replicationQueueStatus.queueMemorySize]
 * 
 * @member {string} [replicationQueueStatus.firstSequenceNumber]
 * 
 * @member {string} [replicationQueueStatus.completedSequenceNumber]
 * 
 * @member {string} [replicationQueueStatus.committedSequenceNumber]
 * 
 * @member {string} [replicationQueueStatus.lastSequenceNumber]
 * 
 */
function DeployedReplicaDetailReplicatorStatus() {
}

/**
 * Defines the metadata of DeployedReplicaDetailReplicatorStatus
 *
 * @returns {object} metadata of DeployedReplicaDetailReplicatorStatus
 *
 */
DeployedReplicaDetailReplicatorStatus.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'DeployedReplicaDetail_ReplicatorStatus',
    type: {
      name: 'Composite',
      className: 'DeployedReplicaDetailReplicatorStatus',
      modelProperties: {
        kind: {
          required: false,
          serializedName: 'Kind',
          type: {
            name: 'Number'
          }
        },
        replicationQueueStatus: {
          required: false,
          serializedName: 'ReplicationQueueStatus',
          type: {
            name: 'Composite',
            className: 'DeployedReplicaDetailReplicatorStatusReplicationQueueStatus'
          }
        }
      }
    }
  };
};

module.exports = DeployedReplicaDetailReplicatorStatus;
