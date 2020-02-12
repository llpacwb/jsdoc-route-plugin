/**
 * This module defines a custom jsDoc tag.
 * It allows you to document the authentication of a route.
 * @module lib/authentication
 */

'use strict';

exports.name = 'authentication';
exports.options = {
  mustHaveValue: true,
  mustNotHaveDescription: true,
  canHaveType: false,
  canHaveName: false,
  onTagged: function(doclet, tag) {
    doclet.authentication = tag.value;
    doclet.description = `<div class="route-description">${doclet.description}</div>
                          <h5>Authentication</h5>
                          <p>${doclet.authentication}</p>`;
  },
}
exports.newDocletHandler = function(e) { /* Do Nothing */ }
