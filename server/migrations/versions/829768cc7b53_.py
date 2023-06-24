"""empty message

Revision ID: 829768cc7b53
Revises: 
Create Date: 2023-06-24 14:01:44.220241

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import mysql

# revision identifiers, used by Alembic.
revision = '829768cc7b53'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('courses', schema=None) as batch_op:
        batch_op.alter_column('subject',
               existing_type=mysql.VARCHAR(length=50),
               nullable=True)

    with op.batch_alter_table('users', schema=None) as batch_op:
        batch_op.add_column(sa.Column('student_id', sa.Integer(), nullable=True))
        batch_op.add_column(sa.Column('preferences', mysql.JSON(), nullable=True))
        batch_op.add_column(sa.Column('interests', mysql.JSON(), nullable=True))
        batch_op.add_column(sa.Column('requirements', mysql.JSON(), nullable=True))
        batch_op.add_column(sa.Column('grade', sa.Integer(), nullable=False))
        batch_op.add_column(sa.Column('semester', sa.Integer(), nullable=False))
        batch_op.add_column(sa.Column('major', sa.String(length=80), nullable=False))
        batch_op.create_unique_constraint(None, ['student_id'])

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('users', schema=None) as batch_op:
        batch_op.drop_constraint(None, type_='unique')
        batch_op.drop_column('major')
        batch_op.drop_column('semester')
        batch_op.drop_column('grade')
        batch_op.drop_column('requirements')
        batch_op.drop_column('interests')
        batch_op.drop_column('preferences')
        batch_op.drop_column('student_id')

    with op.batch_alter_table('courses', schema=None) as batch_op:
        batch_op.alter_column('subject',
               existing_type=mysql.VARCHAR(length=50),
               nullable=False)

    # ### end Alembic commands ###