import { Table, Column, Model, DataType, } from 'sequelize-typescript';
//import { User } from './User'; // Assuming User model is in the same directory

@Table({ tableName: 'news' })
class News extends Model {
    @Column({ primaryKey: true, autoIncrement: true, type: DataType.INTEGER.UNSIGNED })
    public id!: number;

    @Column({ type: DataType.STRING(255), allowNull: false })
    public title!: string;

    @Column({ type: DataType.STRING(500), allowNull: false })
    public imageUrl!: string;

    @Column({ type: DataType.TEXT, allowNull: false })
    public content!: string;

    @Column({ type: DataType.DATE, allowNull: false, defaultValue: DataType.NOW })
    public date!: Date;

    // @ForeignKey(() => User) 
    // @Column(DataType.INTEGER.UNSIGNED)
    // public userId!: number;
}