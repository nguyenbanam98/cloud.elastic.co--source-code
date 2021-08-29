/*
 * ELASTICSEARCH CONFIDENTIAL
 * __________________
 *
 *  Copyright Elasticsearch B.V. All rights reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Elasticsearch B.V. and its suppliers, if any.
 * The intellectual and technical concepts contained herein
 * are proprietary to Elasticsearch B.V. and its suppliers and
 * may be covered by U.S. and Foreign Patents, patents in
 * process, and are protected by trade secret or copyright
 * law.  Dissemination of this information or reproduction of
 * this material is strictly forbidden unless prior written
 * permission is obtained from Elasticsearch B.V.
 */

import { connect } from 'react-redux'

import SnapshotInProgress from './SnapshotInProgress'
import { getSnapshotStatus } from '../../../../reducers'
import { fetchSnapshotStatus } from '../../../../actions/snapshots/'
import { fetchSnapshotStatusRequest } from '../../../../reducers/asyncRequests/registry'
import schedule from '../../../../lib/schedule'

const mapStateToProps = (state, { snapshotName, cluster: { regionId, id: clusterId } }) => ({
  snapshotStatus: getSnapshotStatus(state, regionId, clusterId, snapshotName),
  fetchSnapshotStatusRequest: fetchSnapshotStatusRequest(state, regionId, clusterId, snapshotName),
})

const scheduledComponent = schedule(
  SnapshotInProgress,
  ({ cluster, snapshotName, fetchSnapshotStatus }) => fetchSnapshotStatus(cluster, snapshotName),
)

export default connect(mapStateToProps, {
  fetchSnapshotStatus,
})(scheduledComponent)
