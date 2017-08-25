import React from 'react'

import TableHeader from './TableHeader'
import TableFooter from './TableFooter'
import TableRow from './TableRow'

const HalfDay = () => (
  <table>
    <TableHeader title="Bröllop Halvdag" />
    <TableFooter title="10 000kr"/>
    <tbody>
      <TableRow><strong>4 timmars</strong> fotografering</TableRow>
      <TableRow>Minst <strong>200</strong> redigerade bilder på Dropbox och USB-minne</TableRow>
      <TableRow>Planeringsträff</TableRow>
      <TableRow>Porträttfotografering utomhus</TableRow>
      <TableRow>Vigselfotografering</TableRow>
      <TableRow>Mingelfotografering</TableRow>
    </tbody>
  </table>
)
export default HalfDay
