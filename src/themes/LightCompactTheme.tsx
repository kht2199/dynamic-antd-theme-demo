import * as React from 'react';
import {useStyles} from "../hooks/useStyles";

const styles = require('./light-compact.theme.less');

export default function LightCompactTheme() {
  useStyles(styles.default);
  return null;
}