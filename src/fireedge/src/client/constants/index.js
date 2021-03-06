/* Copyright 2002-2020, OpenNebula Project, OpenNebula Systems                */
/*                                                                            */
/* Licensed under the Apache License, Version 2.0 (the "License"); you may    */
/* not use this file except in compliance with the License. You may obtain    */
/* a copy of the License at                                                   */
/*                                                                            */
/* http://www.apache.org/licenses/LICENSE-2.0                                 */
/*                                                                            */
/* Unless required by applicable law or agreed to in writing, software        */
/* distributed under the License is distributed on an "AS IS" BASIS,          */
/* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.   */
/* See the License for the specific language governing permissions and        */
/* limitations under the License.                                             */
/* -------------------------------------------------------------------------- */

const JWT_NAME = 'SunstoneToken'

const APPS = {
  fireedge: 'fireedge',
  provision: 'provision'
}

const BY = {
  text: 'OpenNebula',
  url: 'https://opennebula.io/'
}

const ONEADMIN_ID = '0'

const FILTER_POOL = {
  PRIMARY_GROUP_RESOURCES: '-4',
  USER_RESOURCES: '-3',
  ALL_RESOURCES: '-2',
  USER_GROUPS_RESOURCES: '-1'
}

const INPUT_TYPES = {
  TEXT: 'text',
  HIDDEN: 'hidden',
  SELECT: 'select',
  CHECKBOX: 'checkbox',
  SLIDER: 'slider',
  AUTOCOMPLETE: 'autocomplete'
}

export {
  BY,
  JWT_NAME,
  APPS,
  ONEADMIN_ID,
  FILTER_POOL,
  INPUT_TYPES
}
