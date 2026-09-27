/* =====================================================
   LOCALHUB THEME
   Shared colours, type scale, radii and shadows.
   Import what you need:

   import { COLORS, FONT, SHADOW } from '../theme';
===================================================== */

export const COLORS = {
  // Backgrounds (darkest -> lightest)
  background: '#071A2C',
  surface: '#0B1D30',
  card: '#102238',
  cardRaised: '#132A42',
  input: '#102438',
  border: '#1A3350',
  borderSoft: 'rgba(255,255,255,0.06)',

  // Brand
  primary: '#3B82F6',
  primaryLight: '#6EA5FF',
  primarySoft: 'rgba(59,130,246,0.14)',
  success: '#10B981',
  successSoft: 'rgba(16,185,129,0.14)',
  warning: '#F59E0B',
  warningSoft: 'rgba(245,158,11,0.14)',
  danger: '#EF4444',

  // Text
  textPrimary: '#FFFFFF',
  textSecondary: '#C8D4E0',
  textMuted: '#8CA0B4',
  textFaint: '#6F8295',
};

/* Type scale — every screen maps onto these sizes. */
export const FONT = {
  micro: 10,
  caption: 11,
  small: 12,
  body: 13,
  bodyLarge: 14,
  subtitle: 15,
  title: 17,
  heading: 20,
  display: 26,
  hero: 34,
};

export const RADIUS = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 22,
  pill: 999,
};

export const SHADOW = {
  card: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.28,
    shadowRadius: 12,
    elevation: 6,
  },

  soft: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 3,
  },

  glow: {
    shadowColor: '#3B82F6',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.45,
    shadowRadius: 12,
    elevation: 10,
  },
};
