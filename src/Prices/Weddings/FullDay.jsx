import React from 'react'

import TableHeader from './TableHeader'
import TableFooter from './TableFooter'
import TableRow from './TableRow'

const FullDay = () => (
  <table>
    <TableHeader title="Bröllop Heldag" />
    <TableFooter title="15 000kr"/>
    <tbody>
      <TableRow><strong>10 timmars</strong> fotografering</TableRow>
      <TableRow>Minst <strong>400</strong> redigerade bilder på Dropbox och USB-minne</TableRow>
      <TableRow>Planeringsträff</TableRow>
      <TableRow>Porträttfotografering utomhus</TableRow>
      <TableRow>Vigselfotografering</TableRow>
      <TableRow>Mingelfotografering</TableRow>
      <TableRow>Fotografering av bröllopsparets förberedelser</TableRow>
      <TableRow>Middagsfotografering (Tal, Tårta, Mat, Gäster)</TableRow>
      <TableRow>Fotografering på kvällen (Dans, Skål, Skratt)</TableRow>
    </tbody>
  </table>
)
export default FullDay
