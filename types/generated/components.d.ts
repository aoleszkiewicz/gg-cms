import type { Schema, Attribute } from '@strapi/strapi';

export interface ContentSubarticle extends Schema.Component {
  collectionName: 'components_content_subarticles';
  info: {
    displayName: 'Subarticle';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    contentBoxes: Attribute.Component<'ui.cc-box-desc', true>;
  };
}

export interface UiButton extends Schema.Component {
  collectionName: 'components_ui_buttons';
  info: {
    displayName: 'Button';
    description: '';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
    icon: Attribute.Component<'ui.icon'>;
    iconPlacement: Attribute.Enumeration<['left', 'right']> &
      Attribute.DefaultTo<'left'>;
    textColor: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    backgroundColor: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    iconOnHover: Attribute.Component<'ui.icon'>;
  };
}

export interface UiCcBoxDesc extends Schema.Component {
  collectionName: 'components_ui_cc_box_descs';
  info: {
    displayName: 'CC Box Desc';
  };
  attributes: {
    description: Attribute.Text;
    content: Attribute.Media & Attribute.Required;
    backgroundColor: Attribute.String &
      Attribute.Required &
      Attribute.CustomField<'plugin::color-picker.color'>;
    buttonIconPlacement: Attribute.Enumeration<['left', 'right']> &
      Attribute.Required &
      Attribute.DefaultTo<'left'>;
    buttonTextColor: Attribute.String &
      Attribute.Required &
      Attribute.CustomField<'plugin::color-picker.color'>;
    buttonPlacement: Attribute.Enumeration<
      ['top-left', 'top-right', 'bottom-left', 'bottom-right']
    > &
      Attribute.Required &
      Attribute.DefaultTo<'bottom-left'>;
    buttonIcon: Attribute.Component<'ui.icon'> & Attribute.Required;
  };
}

export interface UiCcBox extends Schema.Component {
  collectionName: 'components_ui_cc_boxes';
  info: {
    displayName: 'CC Box';
    description: '';
  };
  attributes: {
    content: Attribute.Media & Attribute.Required;
    backgroundColor: Attribute.String &
      Attribute.Required &
      Attribute.CustomField<'plugin::color-picker.color'>;
    buttonIconPlacement: Attribute.Enumeration<['left', 'right']> &
      Attribute.DefaultTo<'left'>;
    buttonTextColor: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    buttonPlacement: Attribute.Enumeration<
      ['top-left', 'top-right', 'bottom-left', 'bottom-right']
    > &
      Attribute.DefaultTo<'bottom-left'>;
    buttonIcon: Attribute.Component<'ui.icon'>;
  };
}

export interface UiIcon extends Schema.Component {
  collectionName: 'components_ui_icons';
  info: {
    displayName: 'Icon';
    description: '';
  };
  attributes: {
    name: Attribute.Enumeration<
      [
        'address',
        'agile-and-eco-coding',
        'arrow-down',
        'arrow-down-2',
        'arrow-right',
        'arrow-right-2',
        'arrow-right-3',
        'bin-dark',
        'bin-light',
        'carousel-arrow-left',
        'carousel-arrow-right',
        'dynamic-cloud-solutions',
        'energy-data-centers',
        'fan',
        'leaf-dark-green',
        'leaf-light-green',
        'facebook',
        'facebook-2',
        'innovations-in-management',
        'instagram',
        'instagram-2',
        'it-audit',
        'it-education',
        'linkedin',
        'linkedin-2',
        'mail',
        'sustainable-development-practices',
        'twitter',
        'twitter-2'
      ]
    >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'content.subarticle': ContentSubarticle;
      'ui.button': UiButton;
      'ui.cc-box-desc': UiCcBoxDesc;
      'ui.cc-box': UiCcBox;
      'ui.icon': UiIcon;
    }
  }
}
