import { StyleSheet } from '@react-pdf/renderer';

export const styles = StyleSheet.create({
    BodyWrapper: {
        display: 'flex',
        height: 792,
        width: 612,
        flexDirection: 'column',
        padding: 30,
        backgroundColor: '#FFFFFF',
        fontSize: 10,
        paddingBottom: 90
    },
    Header: {
        display: 'flex',
		flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
		marginBottom: 22
    },
    Logo: {
        width: 100,
        height: 80,
        objectFit: 'contain'
    },
    QrImage: {
        width: 80,
        height: 80
    },
    Section: {
        display: 'flex',
        flexDirection: 'column',
		marginBottom: 22
    },
    SectionTitle: {
		fontWeight: 'bold',
        fontSize: 11,
		marginBottom: 10
    },
    SectionContent: {
        display: 'flex',
		flexDirection: 'row',
        justifyContent: 'space-between'
    },
	SectionTitleWrapper: {
		display: 'flex',
		flexDirection: 'column',
        flex: 1
	},
    SectionContent1: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
    },
    AddressTitle: {
        flex: 1, 
        lineHeight: 1.5,
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 11,
        color: '#4E4F60',
    },
    List: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1
    },
    Row: {
        display: 'flex',
		flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8
    },
    RowFirstChild: {
        color: '#9596A4'
    },
    RowLastChild: {
        fontWeight: 500
    },
    TitleRaw: {
        height: 34,
        display: 'flex',
		flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderBottom: '1pt solid #F0F1F5'
    },
    TitleRawItem0L: {
        flex: 0,
        textAlign: 'left',
        color: '#7F7F8D',
        minWidth: 50,
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: 11,
    },
    TitleRawItem0R: {
        flex: 0,
        textAlign: 'right',
        color: '#7F7F8D',
        minWidth: '50pt',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: 11,
    },
    TitleRawItem1: {
        flex: 1,
        textAlign: 'left',
        color: '#7F7F8D',
        minWidth: '50pt',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: 11,
    },
    TitleRawItem2: {
        flex: 2,
        textAlign: 'left',
        color: '#7F7F8D',
        minWidth: 50,
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: 11,
    },
    ItemRaw: {
        backgroundColor: '#FFFFFF',
        display: 'flex',
		flexDirection: 'row',
        alignItems: 'center',
        height: 34,
        borderBottom: '1pt solid #F0F1F5'
    },
    ItemRawTitle0: {
        flex: 0,
        minWidth: 50,
        textAlign: 'left',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 11,
        color: '#4E4F60',
        position: 'relative'
    },
    ItemRawTitle2: {
        flex: 2,
        minWidth: 50,
        textAlign: 'left',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 11,
        color: '#4E4F60',
        position: 'relative'
    },
    ItemRawTitle1: {
        flex: 1,
        minWidth: 50,
        textAlign: 'left',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 11,
        color: '#4E4F60',
        position: 'relative'
    },
    ItemRawTitle0R: {
        flex: 0,
        minWidth: 50,
        textAlign: 'right',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 11,
        color: '#4E4F60',
        position: 'relative'
    },
    ItemRawTitle1R: {
        flex: 1,
        minWidth: 50,
        textAlign: 'right',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 11,
        color: '#4E4F60',
        position: 'relative'
    },
    Devider: {
        marginTop: 2,
        borderTop: '1pt solid #E8E9EF'
    },
    Space: {
        height: 50
    },
    Footer: {
        color: '#5C5D6F',
        position: 'absolute',
        marginLeft: 30,
        width: '100%',
        paddingBottom: 30,
        bottom: 0
    },
    Address: {
        color: '#5C5D6F',
        marginVertical: 3,
        fontSize: 11,
    },
});