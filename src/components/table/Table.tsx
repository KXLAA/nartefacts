import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  Table as RTable,
  useReactTable,
} from '@tanstack/react-table'
import { Edit, Eye, Trash2 } from 'lucide-react'
import Image from 'next/image'
import * as React from 'react'

import { Flex } from '@/components/flex'
import { Grid } from '@/components/grid'
import { DeleteAlbumModal } from '@/components/modal'
import { Album } from '@/graphql'

import { ImageWrapper, StyledTable, TD, TH, TR } from './table.styles'

const columnHelper = createColumnHelper<Album>()

const columns = [
  columnHelper.accessor('albumArt', {
    id: 'albumArt',
    cell: (info) => (
      <ImageWrapper>
        <Image
          src={info.getValue()}
          height={400}
          width={400}
          alt={'album art'}
          layout="responsive"
          placeholder="blur"
          blurDataURL={info.getValue()}
        />
      </ImageWrapper>
    ),
    header: () => <span>Album Art</span>,
  }),
  columnHelper.accessor('title', {
    id: 'title',
    cell: (info) => info.getValue(),
    header: () => <span>Title</span>,
  }),
  columnHelper.accessor((row) => row.artist, {
    id: 'artist',
    cell: (info) => (
      <Flex align="center" gap={4} p={2}>
        <ImageWrapper rounded>
          <Image
            src={info.getValue().photoURL || '/static/placeholder.png'}
            height={40}
            width={40}
            alt={'album art'}
            placeholder="blur"
            blurDataURL={info.getValue().photoURL || '/static/placeholder.png'}
          />
        </ImageWrapper>
        <span>{info.getValue().name}</span>
      </Flex>
    ),
    header: () => <span>Artist</span>,
  }),
  columnHelper.accessor((row) => row.likeCount, {
    id: 'likeCount',
    cell: (info) => info.getValue(),
    header: () => <span>Likes</span>,
  }),
  columnHelper.accessor((row) => row.colors, {
    id: 'colors',
    cell: (info) => (
      <Grid columns={4} gap={2} p={4}>
        {info.getValue().map((color) => (
          <span
            key={color}
            style={{
              background: color,
              width: 50,
              height: 50,
              borderRadius: 9999,
            }}
          />
        ))}
      </Grid>
    ),
    header: () => <span>Palette</span>,
  }),
  columnHelper.display({
    id: 'actions',
    cell: (info) => (
      <Flex gap={4} p={4}>
        <Eye role="button" onClick={() => console.log(info)} />
        <Edit role="button" />
        <DeleteAlbumModal
          trigger={<Trash2 role="button" />}
          id={info.row.original.id}
        />
      </Flex>
    ),
    header: () => <span>Actions</span>,
  }),
]

type TableProps<T> = {
  table?: RTable<T>
  tableData: Album[]
}
export const Table = ({ tableData }: TableProps<Album>) => {
  const [data, setData] = React.useState(() => [...tableData])

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  // fetch more data when the user scrolls to the bottom
  React.useEffect(() => {
    setData(tableData)
  }, [tableData])

  return (
    <div className="p-2">
      <StyledTable>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TH key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </TH>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <TR key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <TD key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TD>
              ))}
            </TR>
          ))}
        </tbody>
      </StyledTable>
      <div className="h-4" />
    </div>
  )
}
