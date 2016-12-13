/**
 * Client-side JS for Components Showcase
 */
import './sass/index.scss'
import React from 'react'
import { render } from 'react-dom'

import TimelineEntry from '../app/components/TimelineEntry'

render(
  <TimelineEntry
    time={0}
    points={{ home: 0, away: 0 }}
    feature='home'/>,
  document.getElementById('timeline-entry')
)
