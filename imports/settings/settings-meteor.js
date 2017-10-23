import * as Settings from '/imports/settings/settings.js';
import * as MeteorMethods from '/imports/_common/meteor-methods.js';

SettingsConfig = Settings.config; 
MeteorMethods.init(SettingsConfig);