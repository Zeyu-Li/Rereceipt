import cv2
import pytesseract
from pytesseract import Output

img = cv2.imread("./a.jpeg")
ret, thresh1 = cv2.threshold(img, 127, 255, cv2.THRESH_BINARY)
d = pytesseract.image_to_data(img, output_type=Output.DICT)
ex_text = pytesseract.image_to_string(thresh1)
print(ex_text)
# cv2.imshow("ORIGINAL", img)
# cv2.imshow("THRESH1", )
# cv2.waitKey(0)
# cv2.destroyAllWindows()