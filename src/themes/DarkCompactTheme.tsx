import * as React from 'react';
import {useStyles} from "../hooks/useStyles";

const styles = require('./dark-compact.theme.less');

export default function DarkCompactTheme() {
  useStyles(styles.default);
  return null;
}