export default function() {
  this.transition(
    this.fromRoute([ 'index', 'about', 'day' ]),
    this.toRoute('contributors'),
    this.use('toLeft'),
    this.reverse('toRight')
  )

  this.transition(
    this.fromRoute([ 'index', 'day' ]),
    this.toRoute('about'),
    this.use('toLeft'),
    this.reverse('toRight')
  )

  this.transition(
    this.fromRoute('index'),
    this.toRoute([ 'day', 'day_loading' ]),
    this.use('toLeft'),
    this.reverse('toRight')
  )

  this.transition(
    this.toRoute([ 'post-contribution', 'edit-contribution' ]),
    this.use('toLeft'),
    this.reverse('toRight')
  )

  this.transition(
    this.use('crossFade', { duration: 200 })
  )
}
