import '@testing-library/jest-dom';
import 'text-encoding';
import { TextEncoder } from 'util';

global.TextEncoder = TextEncoder;