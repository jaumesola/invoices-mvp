import '/imports/client/crud_imports.js';
import * as crud from '/imports/client/crud.js';
import './settings.html';
import '../settings-meteor.js';

SettingsConfig.template = Template.settings;
SettingsConfig.editFormTemplate = Template.editSettingsForm;
crud.init(SettingsConfig);