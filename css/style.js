import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'body': {
    'fontFamily': ''Shadows Into Light', cursive',
    'color': '#000',
    'fontWeight': '300'
  },
  'hr': {
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'height': [{ 'unit': 'px', 'value': 3 }],
    'backgroundColor': '#FF715B'
  },
  'h2': {
    'fontWeight': '800'
  },
  'h3': {
    'fontWeight': '800'
  },
  'h4': {
    'fontWeight': '800'
  },
  'title-super-full': {
    'fontSize': [{ 'unit': 'px', 'value': 60 }],
    'screen&&>w451': {
      'display': 'inline-block'
    }
  },
  'title-super-short': {
    'fontSize': [{ 'unit': 'px', 'value': 60 }]
  },
  'title-logo': {
    'width': [{ 'unit': 'px', 'value': 110 }],
    'marginTop': [{ 'unit': 'px', 'value': 20 }]
  },
  'text-muted': {
    'color': '#FF715B'
  },
  'text-thin': {
    'fontWeight': '100'
  },
  'project-container': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'display': 'flex',
    'flexWrap': 'wrap'
  },
  'project': {
    'width': [{ 'unit': '%H', 'value': 0.33 }],
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }],
    'screen&&<w700': {
      'width': [{ 'unit': '%H', 'value': 0.5 }],
      'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }]
    },
    'screen&&<w450': {
      'width': [{ 'unit': '%H', 'value': 1 }],
      'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }]
    }
  }
});
