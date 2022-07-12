import * as React from 'react';
import {useStyles} from "../hooks/useStyles";

const styles = require('./dark.theme.less');

export default function DarkTheme() {
  useStyles(styles.default);
  return null;
}