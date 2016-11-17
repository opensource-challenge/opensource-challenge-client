export default function() {
  this.transition(
    this.fromRoute([ 'index', 'about' ]),
    this.toRoute('contributors'),
    this.use('toLeft'),
    this.reverse('toRight')
  )

  this.transition(
    this.fromRoute('index'),
    this.toRoute('about'),
    this.use('toLeft'),
    this.reverse('toRight')
  )
}
