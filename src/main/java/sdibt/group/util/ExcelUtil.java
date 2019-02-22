package sdibt.group.util;

import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.poi.hssf.usermodel.HSSFCell;
import org.apache.poi.hssf.usermodel.HSSFHeader;
import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;

public class ExcelUtil {
	/**
	 * 根据表头标题和表行数据集合创建sheet表格
	 * @throws Exception
	 */
	public static void createExcelSheeet(String tableTitle,String[] heads,List<Map<String,Object>> datas,OutputStream out) {
	    HSSFWorkbook demoWorkBook = new HSSFWorkbook();   
	//  创建表  
	    HSSFSheet demoSheet = demoWorkBook.createSheet(tableTitle);   
	  //设置表头，从sheet中得到
        HSSFHeader header = demoSheet.getHeader();   
        header.setCenter(tableTitle);   
        //创建一行
        HSSFRow headerRow = demoSheet.createRow((short) 0);   
        for(int i = 0;i < heads.length;i++) {   
        	//创建一个单元格
            HSSFCell headerCell = headerRow.createCell((short) i);   
           // headerCell.setEncoding(HSSFCell.ENCODING_UTF_16); 
//            CellStyle cs = new CellStyle();
            //设置cell的值
            headerCell.setCellValue(heads[i]);   
        }  
        int rowIndex=1;//设置数据行初始值
        //设置数据集合
	    for (Map<String,Object> map : datas) {
	    //  创建第rowIndex行  
	        HSSFRow row = demoSheet.createRow((short) rowIndex);  
	        int col=0;//第几列
	        for(String key:map.keySet()) {   
//	          创建第i个单元格  
	            HSSFCell cell = row.createCell((short) col);   
	            //cell.setEncoding(HSSFCell.ENCODING_UTF_16);   
	            cell.setCellValue(map.get(key)+"");   
	            col++;
	        }   
	        rowIndex++;
	    	
		}
	    //导出excel到输出流
	    try {
			demoWorkBook.write(out);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}   
	}   
	
	public static void main(String[] args) throws FileNotFoundException {
		String tableTitle="用户信息表";
		String[] heads={"id","用户名","密码"};
		Map u1 = new HashMap();
		u1.put("id", 1);
		u1.put("username", "zhangsan");
		u1.put("password", "ok");
		 
		Map u2 = new HashMap();
		u2.put("id",2);
		u2.put("username", "zhangsan2");
		u2.put("password", "ok2");
		
		List<Map<String,Object>> datas=new ArrayList<Map<String,Object>>();
		datas.add(u2);
		datas.add(u1);
		createExcelSheeet(tableTitle, heads, datas,new FileOutputStream("d:/aa.xls"));
	}

}
