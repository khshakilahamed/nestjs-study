import { Playlist } from "src/playlists/playlist.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('songs')
export class Song{
      @PrimaryGeneratedColumn()
      id: number;

      @Column()
      title: string;

      @Column('date')
      releasedDate: Date;

      @Column('text')
      lyrics: string;

      @ManyToOne(()=> Playlist, (playlist)=> playlist.songs)
      playlist: Playlist

}