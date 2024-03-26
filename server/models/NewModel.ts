import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement, ForeignKey } from 'sequelize-typescript';
import { User } from './UserModel.ts'; // Import the 'User' model class from the appropriate file

@Table({ tableName: 'news' })
class News extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER.UNSIGNED)
    public id!: number;

    @Column({ type: DataType.STRING(255), allowNull: false })
    public title!: string;

    @Column({ type: DataType.STRING(500), allowNull: false })
    public imageUrl!: string;

    @Column({ type: DataType.TEXT, allowNull: false })
    public content!: string;

    @Column({ type: DataType.DATE, allowNull: false, defaultValue: DataType.NOW })
    public date!: Date;

    @ForeignKey(() => User) 
    @Column(DataType.INTEGER.UNSIGNED)
    public userId!: number;
}