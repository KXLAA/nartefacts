/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react'
import { useIntersection } from 'react-use'

export const useInfiniteScroll = (
  ref: React.MutableRefObject<any>,
  fetch: Function,
) => {
  const intersection = useIntersection(ref, {
    root: null,
    rootMargin: '0px',
    threshold: 1,
  })
  React.useEffect(() => {
    if (intersection?.intersectionRatio === 1) {
      fetch()
    }
  }, [intersection])
}
