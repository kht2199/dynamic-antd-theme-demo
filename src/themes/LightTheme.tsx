import * as React from 'react';
import {useStyles} from "../hooks/useStyles";

const styles = require('./light.theme.less');

export default function LightTheme() {
  useStyles(styles.default);
  return null;
}